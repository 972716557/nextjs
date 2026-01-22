"use client";
import { Button } from "antd";
import React from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function GlobalError() {
  const router = useRouter();
  const t = useTranslations("error");

  return (
    <html lang="en">
      <body>
        <div>
          {t("globalError")}
          <Button type="primary" onClick={() => router.refresh()}>
            refresh
          </Button>
        </div>
      </body>
    </html>
  );
}
