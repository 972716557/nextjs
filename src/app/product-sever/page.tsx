import React from "react";
import { addProduct } from "../prisma-db";
import { redirect } from "next/navigation";
import Submit from "./submit";

export default function Page() {
  async function createProduct(formData: FormData) {
    "use server";
    const name = formData.get("name");
    const price = formData.get("price");
    const description = formData.get("description");
    await addProduct({
      name: name as string,
      price: Number(price),
      description: description as string,
    });
    redirect("/product-db");
  }
  return (
    <div>
      <form action={createProduct} className="p-4 space-y-4 max-w-96">
        <label htmlFor="name">
          Name
          <input type="text" name="name" className="block w-full p-2 border" />
        </label>
        <label htmlFor="name">
          price
          <input type="text" name="price" className="block w-full p-2 border" />
        </label>
        <label htmlFor="name">
          description
          <input
            type="text"
            name="description"
            className="block w-full p-2 border"
          />
        </label>
        <Submit />
      </form>
    </div>
  );
}
