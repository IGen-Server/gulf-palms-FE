/* eslint-disable @next/next/no-page-custom-font */
import i18nConfig from "@/i18nConfig";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { ReactNode } from "react";
import { dir } from "i18next";
import { ThemeProvider } from "@/components/ThemeProvider/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "./globals.css";
import { GlobalDataProvider } from "@/providers/GlobalDataProvider";
import { LoadingProvider } from "@/providers/LoadingProvider";
import { CartProvider } from "@/providers/CartProvider";
import localFont from "next/font/local";
import Link from "next/link";
import { ChatIcon } from "@/assets/images/icon/ChatIcon";
import { getCookie, setCookie } from "cookies-next";
import initializeTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import { UserDataProvider } from "@/providers/UserDataProvider";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const neo_arabic_font = localFont({
  src: "../fonts/neo_arabic_font.woff2",
  weight: "400",
  variable: "--neo-arabic-font",
});

export const metadata: Metadata = {
  title: "Gulf Palms - The OG of Agricalture",
  description: "Brand Description",
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

const i18nNamespaces = ["common"];

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  let currentLocale = getCookie("NEXT_LOCALE") || i18nConfig.defaultLocale;

  // Set the cookie if it doesn't exist
  if (!getCookie("NEXT_LOCALE")) {
    setCookie("NEXT_LOCALE", currentLocale);
  }

  const { t, resources } = await initializeTranslations(locale, i18nNamespaces);

  return (
    <html lang={locale} dir={dir(locale)} suppressHydrationWarning>
      <head>
        <link rel="favicon" href="public\images\favicon\favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body
        className={`${locale === "en" ? lato.className : neo_arabic_font.className
          } w-[100vw] mx-auto overflow-x-hidden`}
      >
        <TranslationsProvider
          namespaces={i18nNamespaces}
          locale={locale}
          resources={resources}
        >
          <LoadingProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <UserDataProvider>
                <CartProvider>{children}</CartProvider>
              </UserDataProvider>
              <Toaster
                richColors
                duration={3000}
                position="top-right"
                expand={false}
                visibleToasts={5}
              />
              <div className="fixed bottom-[75px] left-4 cursor-pointer z-[50]">
                <Link href="https://api.whatsapp.com/send/?phone=96560660378&text&type=phone_number&app_absent=0">
                  {" "}
                  <ChatIcon />{" "}
                </Link>
              </div>
            </ThemeProvider>
          </LoadingProvider>
        </TranslationsProvider>
      </body>
    </html>
  );
}
