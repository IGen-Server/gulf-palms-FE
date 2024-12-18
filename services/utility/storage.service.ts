import { setCookie, getCookie, deleteCookie } from 'cookies-next';

export const CookieStorageService = {
  ACCESS_TOKEN: 'ACCESS_TOKEN',
  REFRESH_TOKEN: 'REFRESH_TOKEN',
  LOCALE: 'LOCALE',

  getAccessToken(): string | null {
    return getCookie(this.ACCESS_TOKEN) || null;
  },
  setAccessToken(token: string): void { 
    setCookie(this.ACCESS_TOKEN, token);
  },
  clearAccessToken(): void {
    deleteCookie(this.ACCESS_TOKEN); 
  },

  getRefreshToken(): string | null {
    return getCookie(this.REFRESH_TOKEN) || null;
  },
  setRefreshToken(token: string): void { 
    setCookie(this.REFRESH_TOKEN, token);
  },
  clearRefreshToken(): void {
    deleteCookie(this.REFRESH_TOKEN); 
  },

  getLocale(): string | null {
    return getCookie(this.LOCALE) || null;
  },
  setLocale(locale: string): void { 
    setCookie(this.LOCALE, locale);
  },
  clearLocale(): void {
    deleteCookie(this.LOCALE); 
  },

  clearAllTokens(): void {
    this.clearAccessToken(); 
    this.clearRefreshToken(); 
  },

  set(key: string, value: any): void { 
    setCookie(key, value);
  },
  get(key: string) { 
    return getCookie(key) || null;
  },
};
