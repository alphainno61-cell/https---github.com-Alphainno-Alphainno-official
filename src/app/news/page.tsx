import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
  description: "Company announcements and product updates.",
};

const posts = [
  { title: "Introducing AI Suite", date: "2025-10-12" },
  { title: "Platform v3 Launch", date: "2025-07-01" },
];

export default function NewsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Newsroom</h1>
      <p className="mt-2 text-gray-600">
        The latest from Alphainno.
      </p>
      <div className="mt-6 space-y-4">
        {posts.map((post) => (
          <article key={post.title} className="rounded-lg border p-4">
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p className="text-sm text-gray-600">{new Date(post.date).toLocaleDateString()}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
