import { api } from "@/services/api";
import { PostCard } from "@/components/feed/PostCard";

export default async function CompanyPostsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = await api.company.getPosts(slug);

  return (
    <div className="space-y-4 max-w-2xl mx-auto">
      {posts.length > 0 ? (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      ) : (
        <div className="text-center py-12 text-[var(--muted-foreground)]">
          No posts yet.
        </div>
      )}
    </div>
  );
}
