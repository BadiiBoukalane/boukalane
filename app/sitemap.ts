import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://axon.dev';
  const languages = ['en', 'de', 'fr', 'ar'];

  // Generate sitemap entries for all language versions
  const routes = languages.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
      alternates: {
        languages: Object.fromEntries(
          languages.map((lang) => [lang, `${baseUrl}/${lang}`])
        ),
      },
    },
  ]);

  return routes;
}
