"use client";
import React, { useActionState } from "react";
import { createProduct, FormState } from "@/actions/product";

export default function Page() {
  const initialState: FormState = {
    error: {},
  };

  const [state, formAction, isPending] = useActionState(
    createProduct,
    initialState
  );
  return (
    <div>
      <form action={formAction} className="p-4 space-y-4 max-w-96">
        <div>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              className="block w-full p-2 border"
            />
          </label>
          {state.error.name && (
            <p className="text-red-500">{state.error.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="name">
            price
            <input
              type="text"
              name="price"
              className="block w-full p-2 border"
            />
          </label>
          {state.error.price && (
            <p className="text-red-500">{state.error.price}</p>
          )}
        </div>
        <div>
          <label htmlFor="name">
            description
            <input
              type="text"
              name="description"
              className="block w-full p-2 border"
            />
          </label>
          {state.error.description && (
            <p className="text-red-500">{state.error.description}</p>
          )}
        </div>
        {/* <Submit /> */}
        <button
          type="submit"
          disabled={isPending}
          className="block w-full p-2 bg-blue-500 text-white disabled:bg-gray-500"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
