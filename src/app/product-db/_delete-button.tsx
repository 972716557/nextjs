"use client";
import { Button } from "antd";
import React from "react";
import { removeProduct } from "./_delete";

export default function DeleteButton({ id }: { id: number }) {
  const onClick = async () => {
    await removeProduct(id);
  };
  return (
    <div>
      <Button onClick={onClick}>删除</Button>
    </div>
  );
}
