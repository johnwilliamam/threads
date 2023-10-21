import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { posts } from '@/utils/posts';
import formatDistanceStrict from 'date-fns/formatDistanceStrict';
import { Heart, MessageCircle, MoreHorizontal, Repeat2, Send } from 'lucide-react';
import Navbar from "./navbar";
import HomePost from "./post";
import { PostAvatar } from "./post/post-avatar";
import { RepliesAvatar } from "./post/replies-avatar";
import styles from './styles.module.css';

export default function Home() {
  return (
    <main >
      <nav className="flex justify-between items-center py-1 px-6">
        <Navbar />
      </nav>
      <article className="max-w-lg m-auto">
        <section>
          <HomePost src="https://github.com/johnwilliamam.png" fallbackInitials="JW" username="johnwilliam"/>
        </section>
        <span className="border-b-zinc-700 h-full border-b-[1px] block ml-5 my-2"></span>
        <hr className="my-4 h-[0.5px] opacity-20" />

        <div className="space-y-6">
          {posts.map((post) => (
              <><section key={post.id} className={styles.container}>
              <div className={styles.avatar}>
                <PostAvatar src={post.user.profilePicture.src} fallbackInitials={post.user.profilePicture.initials} />
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
                  {post.replies.count} {post.replies.count > 1 ? 'respostas' : 'reposta' } - {post.likes} {post.likes > 1 ? 'curtidas' : 'curtida'}
                </span>
              </div>
            </section>
            <span className="border-b-zinc-700 h-full border-b-[1px] block ml-5 my-2"></span>
            </>
          ))}
        </div>
      </article>
    </main>
  )
}
