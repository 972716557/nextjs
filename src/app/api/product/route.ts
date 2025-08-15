import { addProduct, getProducts } from "@/app/prisma-db";

export async function POST(request: Request) {
  const data = await request.json();
  const { name, description, price } = data;
  console.log(data, "data");
  const product = await addProduct({
    name,
    description,
    price,
  });
  return new Response(JSON.stringify(product), {
    headers: { "Content-Type": "application/json" },
  });
}
export async function GET() {
  return new Response(JSON.stringify(await getProducts()), {
    headers: { "Content-Type": "application/json" },
  });
}
