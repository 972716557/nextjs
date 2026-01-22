import React from "react";
import { clientOnly } from "@/utils/client-only";
import { getTranslations } from "next-intl/server";

export default async function Detail() {
  clientOnly();
  const t = await getTranslations("log");

  return <div>{t("clientOnly")}</div>;
}
