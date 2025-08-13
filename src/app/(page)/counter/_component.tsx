"use client";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

export default function Page() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      {count}
      <Button type="primary" onClick={() => setCount(count + 1)}>
        增加
      </Button>
      <Link href="/detail" replace>
        详情页
      </Link>
      <Button type="primary" onClick={() => setCount(count - 1)}>
        减少{" "}
      </Button>
    </div>
  );
}
