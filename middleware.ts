import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['fr', 'en', 'kw', 'sl', 'es', 'lt', 'de', 'it', 'hr', 'lv'];
const defaultLocale = 'fr';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Exclure explicitement les fichiers SEO et statiques du middleware
  if (
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname.startsWith('/images/') ||
    pathname.startsWith('/api/') ||
    pathname.includes('.') // Exclut tous les fichiers avec une extension (.png, .ico, etc.)
  ) {
    return;
  }

  // 2. Vérifier si le chemin contient déjà une langue supportée
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirection si pas de langue présente
  const locale = defaultLocale; // On pourrait ici détecter la langue du navigateur
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next), static files, and SEO files
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|images|public).*)',
  ],
};
