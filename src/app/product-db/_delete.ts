"use server";
import { revalidatePath } from "next/cache";
import { deleteProduct } from "../prisma-db";

export async function removeProduct(id: number) {
  deleteProduct(id);
  // 刷新页面
  revalidatePath("/product-db");
}
