import { notFound } from "next/navigation";
import { api } from "@/services/api";
import { PostCard } from "@/components/feed/PostCard";

export default async function PostPage({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId: postId } = await params;
  const post = await api.feed.getPostWithId(postId);
  if (!post) {
    notFound();
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <PostCard post={post} />
    </div>
  );
}
