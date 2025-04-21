import { getProducts } from '@/prisma-db';
import { ProductDetail } from './product-detail';

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductDBPage({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const { query } = await searchParams; // Await the searchParams promise to get the query parameter
  const Products: Product[] = await getProducts(query); // Fetch products from the database

  return <ProductDetail products={Products} />; // Pass the products to the ProductDetail component
}
