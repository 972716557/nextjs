"use client";
import { Button } from "antd";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import React from "react";

export default function Page() {
  const [count, setCount] = React.useState(0);
  const t = useTranslations("counter");
  const locale = useLocale();

  return (
    <div>
      {count}
      <Button type="primary" onClick={() => setCount(count + 1)}>
        {t("increase")}
      </Button>
      <Link href={`/${locale}/detail`} replace>
        {t("detail")}
      </Link>
      <Button type="primary" onClick={() => setCount(count - 1)}>
        {t("decrease")}
      </Button>
    </div>
  );
}
