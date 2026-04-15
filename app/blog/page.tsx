import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Blog() {
  const postsDirectory = path.join(process.cwd(), "content/posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      title: data.title,
      date: data.date,
      slug: filename.replace(".md", ""),
    };
  });

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} className="mb-4">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-500">{post.date}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}