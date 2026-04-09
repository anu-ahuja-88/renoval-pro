import { MetadataRoute } from 'next'

const DOMAIN = 'https://renovalpro.co.nz'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: DOMAIN,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]
}
