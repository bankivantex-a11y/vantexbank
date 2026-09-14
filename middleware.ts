import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['fr', 'en', 'kw', 'sl', 'es', 'lt', 'de', 'it'];
const defaultLocale = 'fr';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Vérifier si le chemin contient déjà une langue supportée
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
    // Skip all internal paths (_next) and static files
    '/((?!api|_next/static|_next/image|favicon.ico|images|public).*)',
  ],
};
