import { i18nRouter } from "next-i18n-router";
import i18nConfig from "./i18nConfig";
import { NextRequest, NextResponse } from "next/server";

// Prev middleware
// export function middleware(request: NextRequest) {
//   return i18nRouter(request, i18nConfig);
// }

// Updated middleware
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const pathSegments = request.nextUrl.pathname.split('/');
  const hasLocale = i18nConfig.locales.includes(pathSegments[1]);
  const i18nCookieValue = request.cookies.get(i18nConfig.localeCookie || '')?.value;

  if (!hasLocale && (!i18nCookieValue || i18nCookieValue !== i18nConfig.defaultLocale)) {
    url.pathname = `/${i18nConfig.defaultLocale}${url.pathname}`;
    return NextResponse.redirect(url);
  }
  
  return i18nRouter(request, i18nConfig);
}

// only applies this middleware to files in the app directory
export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
