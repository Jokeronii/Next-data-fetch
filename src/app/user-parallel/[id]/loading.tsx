export default function Loading() {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-8">Loading...</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Posts</h2>
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6 animate-pulse">
                <div className="bg-gray-200 h-6 w-full mb-3"></div>
                <div className="bg-gray-200 h-4 w-full mb-4"></div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Albums</h2>
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6 animate-pulse">
                <div className="bg-gray-200 h-6 w-full mb-3"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
