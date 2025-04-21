import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const seedProducts = async () => {
  const count = await prisma.product.count();
  if (count === 0) {
    await prisma.product.createMany({
      data: [
        { title: 'product1', price: 100, description: 'description1' },
        { title: 'product2', price: 200, description: 'description2' },
        { title: 'product3', price: 300, description: 'description3' },
      ],
    });
  }
};

seedProducts();

export async function getProducts(query?: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate a delay
  if (query) {
    return prisma.product.findMany({
      where: {
        OR: [{ title: { contains: query } }, { description: { contains: query } }],
      },
    });
  }
  // If no query is provided, return all products
  return prisma.product.findMany();
}

export async function getProduct(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate a delay
  return prisma.product.findUnique({ where: { id } });
}

export async function addProduct(title: string, price: number, description: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate a delay
  return prisma.product.create({
    data: { title, price, description },
  });
}

export async function updateProduct(id: number, title: string, price: number, description: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate a delay
  return prisma.product.update({
    where: { id },
    data: { title, price, description },
  });
}

export async function deleteProduct(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate a delay
  return prisma.product.delete({ where: { id } });
}
