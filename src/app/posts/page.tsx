import db from "@/lib/db";

const Posts = async () => {
  const posts = await db.post.findMany();
  return (
    <div className="space-y-4 p-4">
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
