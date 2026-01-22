"use client";
import { useTranslations } from "next-intl";
import React from "react";

export default function ClientComponent({
  children,
}: {
  children?: React.ReactNode;
}) {
  const t = useTranslations("component");

  return (
    <div>
      {children}
      {t("clientComponent")}
    </div>
  );
}
