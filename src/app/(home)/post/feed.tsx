"use client"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { posts } from "@/utils/posts";
import { formatDistanceStrict } from "date-fns";
import { Heart, MessageCircle, MoreHorizontal, Repeat2, Send } from "lucide-react";
import { useEffect, useState } from "react";
import styles from '../styles.module.css';
import { PostAvatar } from "./post-avatar";
import { RepliesAvatar } from "./replies-avatar";


export function Feed() {
    const [feed, setFeed] = useState(posts)
    useEffect(() =>{
        setFeed(posts)
    })
    return (
        <div className="space-y-6">
            {feed.map((post) => (
                <><section key={post.id} className={styles.container}>
                    <div className={styles.avatar}>
                        <PostAvatar src={post.user.profilePicture.src} fallbackInitials={post.user.profilePicture.fallbackInitials} />
                    </div>
                    <div className={styles.username}>
                        <p>{post.user.name}</p>
                    </div>
                    <div className={cn(styles.more, "flex items-center gap-1")}>
                        <span className="min-w-[60px] text-gray-500"
                            title={new Date(post.createdAt).toDateString()}>
                            {formatDistanceStrict(new Date(post.createdAt), new Date(), {
                                addSuffix: false
                            })}
                        </span>
                        <Button variant="outline" size='icon' className="rounded-full border-none">
                            <MoreHorizontal />
                        </Button>
                    </div>
                    <div className={styles.separator}>
                        <span className="border-l-zinc-700 h-full border-l-[2px] block ml-5 my-2"></span>
                    </div>
                    <div className={styles.post}>
                        <p> {post.content} </p>
                    </div>
                    <div className={cn(styles.reply_avatar, 'm-auto')}>
                        <RepliesAvatar data={post.replies.avatars} />
                    </div>
                    <div className={cn(styles.actions, "flex space-x-2 mt-3")}>
                        <Heart />
                        <MessageCircle />
                        <Repeat2 />
                        <Send />
                    </div>
                    <div className={styles.likes_replies}>
                        <span className="text-sm text-neutral-500">
                            {post.replies.count} {post.replies.count > 1 ? 'respostas' : 'reposta'} - {post.likes} {post.likes > 1 ? 'curtidas' : 'curtida'}
                        </span>
                    </div>
                </section>
                    <span className="border-b-zinc-700 h-full border-b-[1px] block ml-5 my-2"></span>
                </>
            ))}
        </div>
    )
}