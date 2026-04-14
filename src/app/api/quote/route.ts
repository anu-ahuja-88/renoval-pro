import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const { name, phone, email, service, message, honeypot } = await req.json()

    // Honeypot check — silent rejection so bots don't know they were blocked
    if (honeypot) {
      return NextResponse.json({ success: true })
    }

    if (!name || !phone || !email || !service) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Renoval Pro Website <admin@verrawebstudio.co.nz>',
      to: ['silvagiljuanjose@gmail.com'],
      replyTo: email,
      subject: `New quote request — ${service} (${name})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0A0A0A; padding: 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #fff; font-size: 24px; margin: 0 0 4px;">New Quote Request</h1>
            <p style="color: rgba(255,255,255,0.5); font-size: 14px; margin: 0;">From the Renoval Pro NZ website</p>
          </div>
          <div style="background: #f8f9fa; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e9ecef;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #6c757d; font-size: 13px; width: 140px; vertical-align: top;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #212529; font-size: 15px; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #6c757d; font-size: 13px; vertical-align: top;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #212529; font-size: 15px; font-weight: 600;">
                  <a href="tel:${phone}" style="color: #2563EB; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #6c757d; font-size: 13px; vertical-align: top;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #212529; font-size: 15px; font-weight: 600;">
                  <a href="mailto:${email}" style="color: #2563EB; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #6c757d; font-size: 13px; vertical-align: top;">Service</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; color: #212529; font-size: 15px; font-weight: 600;">${service}</td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding: 12px 0; color: #6c757d; font-size: 13px; vertical-align: top;">Message</td>
                <td style="padding: 12px 0; color: #212529; font-size: 15px; white-space: pre-wrap;">${message}</td>
              </tr>
              ` : ''}
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #e7f0ff; border-radius: 8px; border-left: 4px solid #2563EB;">
              <p style="margin: 0; font-size: 14px; color: #1e40af;">
                Hit reply to respond directly to ${name} at ${email}
              </p>
            </div>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Quote form error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
