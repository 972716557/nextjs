import db from "@/db";
import { NextResponse } from "next/server";

// Delete  /api/articles/:id
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
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
