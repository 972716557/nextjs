import db from "@/db";
import { NextResponse } from "next/server";

// Delete  /api/articles/:id
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await db.update(({ photos }) => {
    const index = photos.findIndex((item) => item.id === id);
    photos.splice(index, 1);
    return photos;
  });
  return NextResponse.json({
    code: 200,
    data: id,
    message: "success",
  });
}

// 获取某一项id的数据
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const data = await db.data;
  const photos = data.photos;
  const index = photos.findIndex((item) => item.id === id);

  return NextResponse.json({
    code: 200,
    data: photos[index],
    message: "success",
  });
}

// 更新某一项id的数据
export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const data = await request.json();
  const { id } = await params;

  await db.update(({ photos }) => {
    const index = photos.findIndex((item) => item.id === id);
    if (index !== -1) {
      photos[index] = { ...photos[index], ...data };
    }
    return photos;
  });

  return NextResponse.json({
    code: 200,
    data,
    message: "success",
  });
}
