import React from "react";
import fs from "fs";
import { getTranslations } from "next-intl/server";

export default async function ServerComponent() {
  const data = fs.readFileSync("src/db.ts", "utf-8");
  const t = await getTranslations("component");

  return <div>{t("serverComponent")}</div>;
}
