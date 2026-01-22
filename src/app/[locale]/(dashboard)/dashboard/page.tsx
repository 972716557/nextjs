import { Card } from "antd";
import Link from "next/link";
import React from "react";
import { getTranslations, getLocale } from "next-intl/server";

export default async function Page() {
  const t = await getTranslations("dashboard");
  const locale = await getLocale();

  return (
    <Card className="w-[200px] h-[200px]">
      {t("oldVersion")}
      <Link href={`/${locale}/dashboard-new`}>
        <button className="bg-blue-500 text-white p-2 rounded">
          {t("goToNew")}
        </button>
      </Link>
    </Card>
  );
}
