import React from "react";
import { getProducts } from "../prisma-db";
import { Product } from "@/generated/prisma";
import { Button } from "antd";
import DeleteButton from "./_delete-button";

export default async function Page() {
  // const data = await fetch("/api/product", {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  // console.log(data, "data");
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
          <div>
            <DeleteButton id={product.id} />
          </div>
        </div>
      ))}
    </div>
  );
}
