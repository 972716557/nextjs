import { NextResponse } from "next/server";
import db from "@/db";
// get  api/articles
export async function GET(request: Request) {
  const data = await db.data;
  console.log(data, "data");
  return NextResponse.json({
    code: 200,
    data: data.photos,
    message: "success",
  });
}

export async function POST(request: Request) {
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
