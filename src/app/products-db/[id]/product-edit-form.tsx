'use client';

import { editProduct, FormState } from '@/actions/products';
import { useActionState } from 'react';
import { Product } from '@/app/products-db/page';

export default function EditProductForm({ product }: { product: Product }) {
  const initialState: FormState = {
    errors: {},
  };

  const editProductWithId = editProduct.bind(null, product.id);

  const [state, formAction, isPending] = useActionState(editProductWithId, initialState);

  return (
    <>
      <form action={formAction} className="flex flex-col gap-4 p-4 bg-gray-800 rounded-lg shadow-md w-1/3 mx-auto mt-10">
        {/* <input type="hidden" name='id' value={product.id} /> */}
        <div>
          <label className="text-white">
            Title
            <input type="text" name="title" className="border border-gray-300 rounded-lg p-2 w-full mb-4" placeholder="Enter product title" defaultValue={product.title} />
          </label>
          {state.errors.title && <p className="text-red-500">{state.errors.title}</p>}
        </div>
        <div>
          <label className="text-white">
            Price
            <input type="number" name="price" className="border border-gray-300 rounded-lg p-2 w-full mb-4" placeholder="Enter product price" defaultValue={product.price} />
          </label>
          {state.errors.price && <p className="text-red-500">{state.errors.price}</p>}
        </div>
        <div>
          <label className="text-white">
            Descriptions
            <input type="string" name="description" className="border border-gray-300 rounded-lg p-2 w-full mb-4" placeholder="Enter product decription" defaultValue={product.description ?? 'no description'} />
          </label>
          {state.errors.description && <p className="text-red-500">{state.errors.description}</p>}
        </div>
        {/* <Submit /> */}
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 disabled:opacity-50 pending::bg-gray-500" disabled={isPending}>
          Submit Product
        </button>
      </form>
    </>
  );
}
