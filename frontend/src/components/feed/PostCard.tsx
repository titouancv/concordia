import Image from "next/image";
import Link from "next/link";
import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
import { Post } from "@/types/feed";
import { Card, CardStyle } from "../layout/Card";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const isCompany = post.author.type === "company";

  return (
    <article
      style={
        post.author.theme && {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          "--primary": post.author.theme.primary,
          "--secondary": post.author.theme.secondary,
          "--action": post.author.theme.action,
          "--primaryText": post.author.theme.primaryText,
          "--secondaryText": post.author.theme.secondaryText,
          "--actionText": post.author.theme.actionText,
        }
      }
    >
      <Card style={isCompany ? CardStyle.SECONDARY : CardStyle.PRIMARY}>
        <div className="flex items-start justify-between mb-3">
          <div className="f group">
            <Link
              href={
                isCompany
                  ? `/company/${post.author.username}`
                  : `/user/${post.author.username}`
              }
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 ${
                    isCompany ? "rounded-sm" : "rounded-full"
                  } overflow-hidden relative`}
                >
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="font-semibold">
                  <p className="font-semibold group-hover:text-[var(--action)] transition-colors">
                    {post.author.name}
                  </p>
                  <p className="text-xs">{post.createdAt}</p>
                </div>
              </div>
            </Link>
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
            <Heart className="w-5 h-5 group-hover:text-[var(--action)]" />
            <span>{post.likes}</span>
          </button>
          <button className="flex items-center gap-2 text-sm group">
            <MessageCircle className="w-5 h-5 group-hover:text-[var(--action)]" />
            <span>{post.comments}</span>
          </button>
          <button className="flex items-center gap-2 text-sm group">
            <Share2 className="w-5 h-5 group-hover:text-[var(--action)]" />
          </button>
        </div>
      </Card>
    </article>
  );
}
