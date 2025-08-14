"use client";
import React from "react";

export default function ClientComponent({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div>
      {children}
      这是客户端组件
    </div>
  );
}
