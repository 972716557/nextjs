import { Button } from "antd";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata() {
  const t = await getTranslations("page");
  return {
    title: t("welcome"),
    description: t("description"),
  };
}

export default async function Page() {
  const t = await getTranslations("page");

  return (
    <div>
      {t("thisIsPage")}
      <Button type="primary">{t("button")}</Button>
    </div>
  );
}
