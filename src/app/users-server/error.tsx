'use client';

import { useEffect } from 'react';

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.log(`${error}`);
  }, [error]);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <h1>Error on data fetch</h1>
      </div>
    </>
  );
}
