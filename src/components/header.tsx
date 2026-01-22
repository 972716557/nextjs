"use client";
import { Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import React from "react";

export default function Header() {
  const router = useRouter();
  const t = useTranslations("nav");
  const locale = useLocale();

  const onClick = () => {
    fetch("/api/logout", {
      method: "DELETE",
    }).finally(() => {
      router.push(`/${locale}/login`);
    });
  };

  return (
    <div className="flex items-center justify-between">
      <Link href={`/${locale}`}>{t("home")}</Link>
      <Link href={`/${locale}/detail`}>{t("detail")}</Link>
      <Link href={`/${locale}/visitor`}>{t("visitor")}</Link>
      <Button onClick={onClick} type="primary">
        {t("logout")}
      </Button>
    </div>
  );
}
