import React from "react";
import { getTranslations } from "next-intl/server";

export default async function Admin() {
  const t = await getTranslations("page");

  return <div className="bg-orange-400 w-100 h-100">{t("admin")}</div>;
}
