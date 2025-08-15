import React from "react";
import { getProducts } from "../prisma-db";
import { Product } from "@/generated/prisma";

export default async function Page() {
  const products: Product[] = await getProducts();
  return (
    <div className="space-y-4 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="p-4 bg-white rounded-lg shadow-md text-gray-800"
        >
          <div className="text-xl font-semibold">{product.name}</div>
          <div>{product.description}</div>
          <div className="text-lg font-medium">{product.price}</div>
        </div>
      ))}
    </div>
  );
}
