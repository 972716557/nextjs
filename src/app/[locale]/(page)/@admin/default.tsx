import React from "react";
import { getTranslations } from "next-intl/server";

export default async function Default() {
  const t = await getTranslations("page");

  return <div className="bg-blue-100 w-100 h-100">{t("defaultPage")}</div>;
}
