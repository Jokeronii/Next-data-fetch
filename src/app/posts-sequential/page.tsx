import { Author } from './author';
import { Suspense } from 'react';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function PostsSequential() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await response.json();
  const filteredPost = posts.filter((post) => post.userId % 10 === 1);

  return (
    <>
      <ul className="grid grid-col-5 r gap-8 p-8">
        {filteredPost.map((post) => (
          <li key={post.id}>
            <div className="text-wrap bg-stone-700 rounded-2xl">
              <h1>Post by user id:{post.userId}</h1>
              <h2>{post.title}</h2>
              <p>{post.body}</p>

              <Suspense fallback={<div className="bg-amber-400 shadow-md rounded-lg">Loading Author...</div>}>
                <Author userId={post.userId} />
              </Suspense>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
