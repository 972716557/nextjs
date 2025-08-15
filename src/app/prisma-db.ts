import { PrismaClient, Product } from "@/generated/prisma";
const prisma = new PrismaClient();
const seedProducts = async () => {
  const count = await prisma.product.count();
  if (count === 0) {
    await prisma.product.createMany({
      data: [
        {
          name: "Product 1",
          description: "Description for Product 1",
          price: 10,
        },
        {
          name: "Product 2",
          description: "Description for Product 2",
          price: 20,
        },
      ],
    });
  }
};
seedProducts();
export async function getProducts() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return prisma.product.findMany();
}

export async function getProduct(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return prisma.product.findUnique({
    where: {
      id,
    },
  });
}

export async function addProduct(data: Product) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return prisma.product.create({
    data,
  });
}
export async function updataProduct(data: Product) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return prisma.product.update({
    where: {
      id: data.id,
    },
    data,
  });
}
export async function deleteProduct(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return prisma.product.delete({
    where: {
      id,
    },
  });
}
