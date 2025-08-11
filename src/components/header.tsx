import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <Link href="/">Home</Link>
      <Link href="/detail">Detail</Link>
      <Link href="/visitor">visitor</Link>
    </div>
  );
}
