import { NextRequest, NextResponse } from "next/server";
import db from "@/db";
// get  api/articles
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const pageSize = Number(searchParams.get("pageSize"));
  const pageNum = Number(searchParams.get("pageNum"));
  const data = await db.data;
  const start = (pageNum - 1) * pageSize;
  const end = Math.max(start + pageSize, data.photos.length);
  return NextResponse.json({
    code: 200,
    data: {
      total: data.photos.length,
      list: data.photos.slice(start, end),
    },
    message: "success",
  });
}

export async function POST(request: Request) {
  // 获取请求body的数据
  const data = await request.json();
  await db.update(({ photos }) =>
    photos.unshift({ id: Math.random().toString(36).slice(-8), ...data })
  );
  return NextResponse.json({
    code: 200,
    data,
    message: "success",
  });
}
