import { AntdRegistry } from "@ant-design/nextjs-registry";
import { getLocale } from "next-intl/server";
import React from "react";
import "./globals.css";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
