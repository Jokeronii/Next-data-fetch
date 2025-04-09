type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export default async function UsersServer() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay of 2 seconds
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await response.json();

  return (
    <>
      <ul className="grid grid-rows-3 grid-flow-col gap-8 p-8">
        {users.map((user) => (
          <li key={user.id} className="bg-amber-500 shadow-md rounded-lg p-4 flex flex-col items-center">
            <div className="text-left">
              <h2>{user.name}</h2>
              <p>{user.username}</p>
              <p>{user.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
