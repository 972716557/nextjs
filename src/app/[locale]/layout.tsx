import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import LanguageSwitch from "@/components/LanguageSwitch";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <div style={{ position: "fixed", top: 16, right: 16, zIndex: 1000 }}>
        <LanguageSwitch />
      </div>
      {children}
    </NextIntlClientProvider>
  );
}
