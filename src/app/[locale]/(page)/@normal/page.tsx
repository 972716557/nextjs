import React from "react";
import { getTranslations } from "next-intl/server";

export default async function Normal() {
  const t = await getTranslations("page");

  return <div className="bg-red-100 w-100 h-100">{t("normal")}</div>;
}
