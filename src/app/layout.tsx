import type { Metadata, Viewport } from 'next'
import { business } from '@/data/business'
import './globals.css'

// TODO: Replace with final domain once client confirms
const DOMAIN = 'https://renovalpro.co.nz'

// TODO: Replace with real GA4 measurement ID from Google Analytics
const GA4_ID = 'G-XXXXXXXXXX'

export const viewport: Viewport = {
  themeColor: business.design.primaryColor,
}

export const metadata: Metadata = {
  title: business.seo.title,
  description: business.seo.description,
  keywords: business.seo.keywords,
  authors: [{ name: business.name }],
  metadataBase: new URL(DOMAIN),
  openGraph: {
    title: business.seo.title,
    description: business.seo.description,
    siteName: business.name,
    type: 'website',
    locale: 'en_NZ',
    url: DOMAIN,
    images: [
      {
        // TODO: Replace with a proper 1200x630px PNG crop — see public/brand/og-image.png
        url: `${DOMAIN}/wellington-home-aerial-blue-roof-exterior-paint-renoval-pro.jpg`,
        width: 1200,
        height: 630,
        alt: `${business.name} — Wellington renovation and painting specialists`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: business.seo.title,
    description: business.seo.description,
    images: [`${DOMAIN}/wellington-home-aerial-blue-roof-exterior-paint-renoval-pro.jpg`],
  },
  alternates: {
    canonical: DOMAIN,
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'geo.region': 'NZ-WGN',
    'geo.placename': 'Wellington',
    'google-site-verification': 'V8uigF4cvxTRjecBBiIoBDVjW1V9OHqHylz7dMrw1Wo',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': DOMAIN,
  name: business.name,
  description: business.seo.description,
  image: `${DOMAIN}/wellington-home-aerial-blue-roof-exterior-paint-renoval-pro.jpg`,
  url: DOMAIN,
  telephone: business.phone,
  email: business.email,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Wellington',
    addressRegion: 'Wellington',
    addressCountry: 'NZ',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -41.2865,
    longitude: 174.7762,
  },
  areaServed: business.serviceAreas.map((area) => ({
    '@type': 'City',
    name: area,
  })),
  serviceType: [
    'Interior Painting',
    'Exterior Painting',
    'Plastering',
    'Gibbing',
    'Timber Repair',
    'Kitchen Cabinet Painting',
    'Property Maintenance',
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '07:30',
    closes: '17:30',
  },
  sameAs: [
    business.social.facebook,
    business.social.instagram,
  ].filter(Boolean),
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: business.name,
  url: DOMAIN,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${DOMAIN}/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cssVars = `
    :root {
      --color-primary: ${business.design.primaryColor};
      --color-secondary: ${business.design.secondaryColor};
      --color-cta: ${business.design.ctaColor};
      --font-heading: '${business.design.headingFont}', sans-serif;
      --font-body: '${business.design.bodyFont}', sans-serif;
    }
  `

  return (
    <html lang="en-NZ">
      <head>
        {/* Meta Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1437585897843447');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1437585897843447&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Google Analytics 4 — TODO: replace G-XXXXXXXXXX with real measurement ID */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', { 'analytics_storage': 'granted' });
              gtag('js', new Date());
              gtag('config', '${GA4_ID}', { 'anonymize_ip': true, 'send_page_view': true });
            `,
          }}
        />

        {/* Fonts — only weights used in the design */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href={business.design.googleFontsUrl} rel="stylesheet" />

        {/* Geo meta */}
        <meta name="geo.region" content="NZ-WGN" />
        <meta name="geo.placename" content="Wellington" />

        {/* Manifest */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* CSS variables */}
        <style dangerouslySetInnerHTML={{ __html: cssVars }} />

        {/* JSON-LD: LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        {/* JSON-LD: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        {/* Skip to main content — first focusable element for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-lg focus:text-white focus:text-sm focus:font-semibold focus:shadow-lg"
          style={{ backgroundColor: '#2563EB' } as React.CSSProperties}
        >
          Skip to main content
        </a>
        <div id="main-content">
          {children}
        </div>
      </body>
    </html>
  )
}
