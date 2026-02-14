import Link from "next/link";
import { PostCard } from "nextra-theme-blog";
import { getPosts, getTags } from "./get-posts";

export const metadata = {
  title: "Posts",
};

type Post = Awaited<ReturnType<typeof getPosts>>[number];

export default async function PostsPage() {
  const tags = await getTags();
  const posts = await getPosts();
  const allTags = Object.create(null);

  for (const tag of tags) {
    allTags[tag] ??= 0;
    allTags[tag] += 1;
  }
  return (
    <div data-pagefind-ignore="all">
      <h1>{metadata.title}</h1>
      <div className="not-prose flex flex-wrap gap-2">
        {Object.entries(allTags).map(([tag, count]) => (
          <Link key={tag} href={`/tags/${tag}`} className="nextra-tag">
            {tag} ({count as number})
          </Link>
        ))}
      </div>
      {posts.map((post: Post) => (
        <PostCard key={post.route} post={post} />
      ))}
    </div>
  );
}
