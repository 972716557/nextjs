import React from "react";
import { log } from "@/utils/log";
import ClientComponent from "@/components/client-component";
import ServerComponent from "@/components/server-component";
import { getTranslations } from "next-intl/server";

export default async function Page() {
  const data = log();
  const t = await getTranslations("log");

  return (
    <div>
      <div>{data}</div>
      <h1>{t("contextData")}</h1>
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
