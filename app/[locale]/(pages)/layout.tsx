import TranslationsProvider from "@/components/TranslationsProvider";
import initializeTranslations from "@/app/i18n";
import { ReactNode } from "react";

const i18nNamespaces = ["common"];

async function PagesLayout({ children, params: { locale } }: { children: ReactNode, params: { locale: string } }) {
  const { t, resources } = await initializeTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      {children}
    </TranslationsProvider>
  );
}

export default PagesLayout;
