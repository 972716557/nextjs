"use client";
import { Button } from "antd";
import { useTranslations } from "next-intl";
import React from "react";
import { removeProduct } from "./_delete";

export default function DeleteButton({ id }: { id: number }) {
  const t = useTranslations("common");

  const onClick = async () => {
    await removeProduct(id);
  };

  return (
    <div>
      <Button onClick={onClick}>{t("delete")}</Button>
    </div>
  );
}
