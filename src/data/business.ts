// ============================================================
// BUSINESS DATA — Renoval Pro NZ
// Only real, confirmed client data. No fabricated stats,
// testimonials, credentials, or service areas.
// ============================================================

export interface BusinessData {
  name: string
  slug: string
  tagline: string
  description: string
  industry: string
  location: string

  phone: string
  email: string
  address: string
  bookingUrl?: string

  social: {
    facebook?: string
    instagram?: string
  }

  hero: {
    headline: string
    subheadline: string
    ctaPrimary: string
    ctaSecondary: string
    badge?: string
  }

  stats: Array<{
    value: string
    label: string
  }>

  services: Array<{
    icon: string
    title: string
    description: string
  }>

  about: {
    headline: string
    body: string
    credentials: string[]
  }

  process: Array<{
    step: string
    title: string
    description: string
  }>

  testimonials: Array<{
    name: string
    location: string
    rating: number
    text: string
  }>

  serviceAreas: string[]

  design: {
    primaryColor: string
    secondaryColor: string
    ctaColor: string
    headingFont: string
    bodyFont: string
    googleFontsUrl: string
  }

  seo: {
    title: string
    description: string
    keywords: string
  }

  clientEmail?: string
  clientName?: string
}

export const business: BusinessData = {
  name: "Renoval Pro NZ",
  slug: "renoval-pro",
  tagline: "Renovate with Confidence",
  description: "Wellington-based renovation and painting specialists. We work closely with clients to understand their vision and deliver results that last.",
  industry: "Construction & Renovation",
  location: "Wellington, New Zealand",

  phone: "027 530 6368",
  email: "admin@renovalpro.co.nz",
  address: "Wellington, New Zealand",

  social: {
    facebook: "https://www.facebook.com/renovalpro",
    instagram: "https://www.instagram.com/renovalpronz",
  },

  hero: {
    headline: "Wellington Renovation and Painting Specialists",
    subheadline: "We listen first. Tell us about your home, how you use it, and what you're after. The finish you get will look like it belongs there.",
    ctaPrimary: "Get a Free Quote",
    ctaSecondary: "See Our Work",
  },

  // No real stats provided by client — leave empty.
  // Do NOT fabricate years, job counts, or ratings.
  stats: [],

  services: [
    {
      icon: "PaintBucket",
      title: "Interior Painting",
      description: "Walls, ceilings, trims, feature walls. We prep everything properly so the finish is smooth and stays that way.",
    },
    {
      icon: "Home",
      title: "Exterior Painting",
      description: "Wellington weather is no joke. We use coatings built to handle it, so your home looks good and stays protected year-round.",
    },
    {
      icon: "Layers",
      title: "Plastering",
      description: "Solid plaster work on walls and ceilings before paint goes on. Get it right here and the whole finish holds.",
    },
    {
      icon: "Square",
      title: "Gibbing",
      description: "New room, renovation, or just repairs. We install and stop gib board flush so it's ready to paint and looks clean.",
    },
    {
      icon: "TreePine",
      title: "Timber Repair",
      description: "Weathered or damaged timber fixed before it turns into a real problem. We repair, fill, sand, and repaint to match.",
    },
    {
      icon: "LayoutGrid",
      title: "Kitchen Cabinets",
      description: "A fresh coat on your cabinets makes the whole kitchen feel different. Fraction of the cost of replacing them.",
    },
    {
      icon: "Wrench",
      title: "Property Maintenance",
      description: "Homeowner or landlord, we handle the ongoing stuff so you don't have to. One call and it's sorted.",
    },
  ],

  about: {
    headline: "We Work With You, Not Just For You",
    body: "Before anything starts, we want to know about your home and what you're after. Not just the colours. What rooms you use most, how the light changes through the day, what kind of finish you can actually live with. That's how you get a result that looks like it belongs there, not just a job that's technically done.",
    credentials: [
      "Free consultations and no-obligation quotes",
      "Residential and rental property experience",
      "Interior and exterior painting specialists",
      "Full renovation project management",
    ],
  },

  process: [
    {
      step: "01",
      title: "Free Quote and Consultation",
      description: "We come to you, walk through the job together, talk options, and give you a clear written quote. No obligation.",
    },
    {
      step: "02",
      title: "We Plan the Job With You",
      description: "Colours, materials, schedule. We agree on everything before work starts. You know exactly what's happening and when.",
    },
    {
      step: "03",
      title: "We Get to Work",
      description: "We show up on time, prep properly, and keep your place clean while we work. No surprises.",
    },
    {
      step: "04",
      title: "Final Walkthrough",
      description: "When the job is done, we walk through it together. We're not finished until you're happy with what you see.",
    },
  ],

  // No testimonials provided by client — leave empty.
  // Do NOT write fake reviews.
  testimonials: [],

  // Confirmed by client: Wellington region.
  serviceAreas: ["Wellington", "Lower Hutt", "Upper Hutt", "Porirua", "Kapiti Coast"],

  design: {
    primaryColor: "#0A0A0A",
    secondaryColor: "#1D4ED8",
    ctaColor: "#2563EB",
    headingFont: "Plus Jakarta Sans",
    bodyFont: "Plus Jakarta Sans",
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap",
  },

  seo: {
    title: "Renovation & Painting Wellington | Renoval Pro NZ",
    description:
      "Wellington renovation and painting specialists. Interior, exterior, plastering, gibbing, timber repair and kitchen cabinets. Call 027 530 6368 for a free quote.",
    keywords:
      "renovation Wellington, house painting Wellington, interior painting Wellington, exterior painting Wellington, plastering Wellington, gibbing Wellington, timber repair Wellington, kitchen cabinet painting Wellington, property maintenance Wellington, painting contractors Wellington, Renoval Pro NZ, home transformation Wellington",
  },

  clientEmail: "admin@renovalpro.co.nz",
  clientName: "Renoval Pro",
}
