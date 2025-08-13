"use client";
import { Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function Header() {
  const router = useRouter();
  const onClick = () => {
    fetch("/api/logout", {
      method: "DELETE",
    }).finally(() => {
      router.push("/login");
    });
  };
  // if (Math.random() > 0.5) {
  //   throw new Error("Error in RootLayout"); // 模拟错误
  // }
  return (
    <div className="flex items-center justify-between">
      <Link href="/">Home</Link>
      <Link href="/detail">Detail</Link>
      <Link href="/visitor">visitor</Link>
      <Button onClick={onClick} type="primary">
        退出登录
      </Button>
    </div>
  );
}
