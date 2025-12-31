import Image from "next/image";
import Link from "next/link";
import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
import { Post } from "@/types/feed";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const isCompany = post.author.type === "company";
  const primaryColor = post.author.theme?.primary;
  const primaryColorText = post.author.theme?.primaryText;

  return (
    <article
      className="bg-[var(--primary)] text-[var(--primaryText)] rounded-sm p-4 mb-4"
      style={
        post.author.theme
          ? {
              backgroundColor: primaryColor,
              color: primaryColorText,
            }
          : {}
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
              className={
                "w-10 h-10 rounded-full overflow-hidden relative border"
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
            >
              {post.author.name}
            </Link>
            <p className="text-xs">{post.createdAt}</p>
          </div>
        </div>
        <button className="">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="mb-4 whitespace-pre-wrap text-sm leading-relaxed">
        {post.content}
      </div>

      {post.image && (
        <div className="mb-4 rounded-sm overflow-hidden relative aspect-video">
          <Image
            src={post.image}
            alt="Post content"
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="flex items-center justify-start gap-4 pt-3">
        <button className="flex items-center gap-2 text-sm transition-colors group">
          <Heart className="w-5 h-5 group-hover:fill-white" />
          <span>{post.likes}</span>
        </button>
        <button className="flex items-center gap-2 text-sm ">
          <MessageCircle className="w-5 h-5" />
          <span>{post.comments}</span>
        </button>
        <button className="flex items-center gap-2 text-sm ">
          <Share2 className="w-5 h-5" />
        </button>
      </div>
    </article>
  );
}
