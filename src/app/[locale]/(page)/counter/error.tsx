"use client";
import React from "react";
import { startTransition } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Button } from "antd";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const t = useTranslations("common");

  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div>
      {error.message}
      <Button onClick={reload}>{t("retry")}</Button>
    </div>
  );
}
