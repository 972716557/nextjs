import React, { use } from "react";
import Counter from "./_component";

export const metadata = {
  title: {
    default: "计数器", // 如果子页面没有设置标题，则使用此默认值
    template: "%s | Next.js", // 这个可以保证页面的统一格式，%s 会被替换为子页面的标题
    absolute: "计数器", // 脱离template模版，直接使用这个标题
  },
};

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ lang?: "zh" | "en" }>;
}) {
  // 匹配动态id
  const { id } = await params;
  // 匹配问号后面的参数
  const { lang } = await searchParams;
  if (Math.random() > 0.5) {
    throw new Error("Error");
  }
  return <Counter />;
}
