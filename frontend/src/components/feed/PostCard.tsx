import Image from "next/image";
import Link from "next/link";
import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { Post } from "@/types/feed";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const isCompany = post.author.type === "company";
  const primaryColor = post.author.theme?.primary;

  return (
    <article
      className="bg-[var(--background)]/80 backdrop-blur-sm border border-[var(--border)] rounded-xl p-4 mb-4 hover:border-[var(--hover-color)] transition-colors"
      style={
        primaryColor
          ? ({ "--hover-color": primaryColor } as React.CSSProperties)
          : undefined
      }
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <Link
            href={
              isCompany
                ? `/company/${post.author.username}`
                : `/user/${post.author.username}`
            }
          >
            <div
              className={cn(
                "w-10 h-10 rounded-full overflow-hidden relative border",
                isCompany ? "border-transparent" : "border-[var(--border)]"
              )}
              style={
                isCompany && post.author.theme
                  ? { borderColor: post.author.theme.primary, borderWidth: 2 }
                  : {}
              }
            >
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
          </Link>
          <div>
            <Link
              href={
                isCompany
                  ? `/company/${post.author.username}`
                  : `/user/${post.author.username}`
              }
              className="font-semibold hover:underline"
              style={
                isCompany && post.author.theme
                  ? { color: post.author.theme.primary }
                  : {}
              }
            >
              {post.author.name}
            </Link>
            <p className="text-xs text-[var(--muted-foreground)]">
              {post.createdAt}
            </p>
          </div>
        </div>
        <button className="text-[var(--muted-foreground)] hover:text-[var(--foreground)]">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="mb-4 whitespace-pre-wrap text-sm leading-relaxed">
        {post.content}
      </div>

      {post.image && (
        <div className="mb-4 rounded-sm overflow-hidden border border-[var(--border)] relative aspect-video">
          <Image
            src={post.image}
            alt="Post content"
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="flex items-center justify-between pt-3 border-t border-[var(--border)]">
        <button className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors group">
          <Heart className="w-5 h-5 group-hover:fill-[var(--primary)]" />
          <span>{post.likes}</span>
        </button>
        <button className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">
          <MessageCircle className="w-5 h-5" />
          <span>{post.comments}</span>
        </button>
        <button className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">
          <Share2 className="w-5 h-5" />
          <span>Share</span>
        </button>
      </div>
    </article>
  );
}
