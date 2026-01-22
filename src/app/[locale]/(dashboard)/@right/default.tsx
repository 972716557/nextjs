"use client";

import { Card } from "antd";
import { useTranslations } from "next-intl";
import React from "react";

export default function Page() {
  const t = useTranslations("dashboard");

  return (
    <Card variant="outlined" className="w-[200px] h-[200px]">
      {t("leftBottom")}
    </Card>
  );
}
