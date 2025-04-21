'use client';

import { useFormStatus } from 'react-dom';

export const Submit = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 disabled:opacity-50 pending::bg-gray-500" disabled={pending}>
      Submit Product
    </button>
  );
};
