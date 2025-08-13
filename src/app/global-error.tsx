"use client";
import { Button } from "antd";
import React from "react";
import { useRouter } from "next/navigation";

export default function GlobalError() {
  const router = useRouter();
  return (
    <html lang="en">
      <body>
        <div>
          捕获 layout、header这种顶层的错误
          <Button type="primary" onClick={() => router.refresh()}>
            refresh
          </Button>
        </div>
      </body>
    </html>
  );
}
