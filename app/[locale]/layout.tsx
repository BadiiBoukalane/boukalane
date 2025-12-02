import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import { CurrencyProvider } from '@/contexts/CurrencyContext';
import StructuredData from '@/components/StructuredData';
import type { Metadata } from 'next';
import '../globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const getMetadataByLocale = (locale: string) => {
  const metadataMap: Record<string, { title: string; description: string; keywords: string }> = {
    en: {
      title: 'Badii Boukalane - Full-Stack Developer | Web & Mobile Apps',
      description: 'Professional full-stack developer specializing in React, Next.js, Node.js. Building modern websites, e-commerce platforms, and complex web applications.',
      keywords: 'full-stack developer, web developer, React developer, Next.js, TypeScript, Node.js, web development services, e-commerce development, Morocco developer'
    },
    de: {
      title: 'Badii Boukalane - Full-Stack Entwickler | Web & Mobile Apps',
      description: 'Professioneller Full-Stack-Entwickler spezialisiert auf React, Next.js, Node.js. Entwicklung moderner Websites, E-Commerce-Plattformen und komplexer Webanwendungen.',
      keywords: 'Full-Stack Entwickler, Webentwickler, React Entwickler, Next.js, TypeScript, Node.js, Webentwicklung, E-Commerce Entwicklung'
    },
    fr: {
      title: 'Badii Boukalane - Développeur Full-Stack | Web & Mobile',
      description: 'Développeur full-stack professionnel spécialisé en React, Next.js, Node.js. Création de sites web modernes, plateformes e-commerce et applications web complexes.',
      keywords: 'développeur full-stack, développeur web, développeur React, Next.js, TypeScript, Node.js, développement web, développement e-commerce, développeur Maroc'
    },
    ar: {
      title: 'بديع بوقلعان - مطور Full-Stack | تطبيقات ويب وموبايل',
      description: 'مطور full-stack محترف متخصص في React و Next.js و Node.js. بناء مواقع حديثة ومنصات تجارة إلكترونية وتطبيقات ويب معقدة.',
      keywords: 'مطور full-stack, مطور ويب, مطور React, Next.js, TypeScript, Node.js, تطوير المواقع, تطوير التجارة الإلكترونية, مطور المغرب'
    }
  };
  return metadataMap[locale] || metadataMap.en;
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = getMetadataByLocale(locale);

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: 'Badii Boukalane' }],
    creator: 'Badii Boukalane',
    publisher: 'AXON',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: `https://axon.dev/${locale}`,
      siteName: 'AXON - Badii Boukalane Portfolio',
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'AXON - Full-Stack Developer Portfolio',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['/og-image.png'],
      creator: '@axondev',
    },
    alternates: {
      canonical: `https://axon.dev/${locale}`,
      languages: {
        'en': '/en',
        'de': '/de',
        'fr': '/fr',
        'ar': '/ar',
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
    category: 'technology',
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const isRTL = locale === 'ar';

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#1e293b" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <StructuredData locale={locale} />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <CurrencyProvider>
            {children}
          </CurrencyProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
