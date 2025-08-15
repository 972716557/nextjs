"use client";
import React from "react";
import { useFormStatus } from "react-dom";

export default function Submit() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="block w-full p-2 bg-blue-500 text-white disabled:bg-gray-500"
    >
      Add Product
    </button>
  );
}
