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
