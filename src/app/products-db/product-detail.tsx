'use client';

import { removeProduct } from '@/actions/products';
import Link from 'next/link';
import { useOptimistic } from 'react';
import Form from 'next/form';

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export function ProductDetail({ products }: { products: Product[] }) {
  // const products: Product[] = await getProducts(); // This should be passed as a prop from the server component

  const [optimisticProducts, setOptimisticProduct] = useOptimistic(products, (currentProducts, productId) => {
    return currentProducts.filter((product) => product.id !== productId);
  });

  const removeProductById = async (productId: number) => {
    setOptimisticProduct(productId);
    await removeProduct(productId);
  };

  return (
    <>
      <div className="flex flex-wrap gap-4">
        {optimisticProducts.map((product) => (
          <div key={product.id} className="border border-gray-300 rounded-lg p-4 w-52 shadow-md">
            <h2 className="text-lg font-semibold mb-2">
              <Link href={`/product-db/${product.id}`}>{product.title}</Link>
            </h2>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="font-bold mt-2">${product.price}</p>
            <Form action={removeProductById.bind(null, product.id)}>
              <button className="mt-2 px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600">Delete</button>
            </Form>
          </div>
        ))}
      </div>
    </>
  );
}
