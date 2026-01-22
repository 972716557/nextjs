import React from "react";
import { getTranslations } from "next-intl/server";

export default async function Layout({
  children,
  left,
  right,
}: {
  children: React.ReactNode;
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  const t = await getTranslations("dashboard");

  return (
    <>
      <h2>{t("title")}</h2>
      <div className="h-[400px]">
        <div className="flex">
          <div className="flex flex-col">
            <div>{left}</div>
            <div>{right}</div>
          </div>
          <div className="w-2/3">{children}</div>
        </div>
      </div>
    </>
  );
}
