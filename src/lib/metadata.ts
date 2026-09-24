import type { Metadata } from 'next';
import { profile, localizedPath, type Locale } from '@/content/site';

const configuredOrigin = profile.siteUrl || process.env.NEXT_PUBLIC_SITE_URL;
const vercelOrigin = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
export const siteOrigin = (configuredOrigin || (vercelOrigin ? `https://${vercelOrigin}` : 'http://localhost:4173')).replace(/\/$/, '');
export const isPublicOrigin = !siteOrigin.startsWith('http://localhost');

export function pageMetadata(locale: Locale, path = '/', heading?: string, description?: string): Metadata {
  const title = heading ? `${heading} | Gustavo Macías` : 'Gustavo Macías | Software Developer';
  const summary = description || (locale === 'es' ? 'Desarrollador de software enfocado en C#, ASP.NET Core, backend, APIs, React y bases de datos.' : 'Software developer focused on C#, ASP.NET Core, backend development, APIs, React, and databases.');
  const url = `${siteOrigin}${localizedPath(locale, path)}`;
  return {
    metadataBase: new URL(siteOrigin), title, description: summary,
    applicationName: 'Gustavo Macías — Portfolio',
    authors: [{ name: profile.name }],
    alternates: { canonical: url, languages: { es: `${siteOrigin}${localizedPath('es', path)}`, en: `${siteOrigin}${localizedPath('en', path)}`, 'x-default': `${siteOrigin}${localizedPath('es', path)}` } },
    openGraph: { title, description: summary, url, type: 'website', locale: locale === 'es' ? 'es_MX' : 'en_US', alternateLocale: locale === 'es' ? 'en_US' : 'es_MX', siteName: 'Gustavo Macías' },
    twitter: { card: 'summary', title, description: summary },
    robots: { index: isPublicOrigin, follow: true },
    icons: { icon: '/favicon.svg' },
  };
}

export function personSchema() {
  return { '@context': 'https://schema.org', '@type': 'Person', name: profile.name, jobTitle: 'Software Developer', ...(isPublicOrigin ? { url: siteOrigin } : {}), address: { '@type': 'PostalAddress', addressRegion: 'Jalisco', addressCountry: 'MX' }, sameAs: [profile.github, ...(profile.linkedin ? [profile.linkedin] : [])] };
}
