type Author = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export async function Author({ userId }: { userId: number }) {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const user: Author = await response.json();

  return (
    <>
      <div className="bg-gray-600 shadow-md rounded-lg">
        Written by: <span className="bold text-amber-200 hover:text-amber-100 transition-colors">{user.name}</span>
      </div>
    </>
  );
}
