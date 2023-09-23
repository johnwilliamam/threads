import LogoThreads from "@/app/assets/logo-threads.svg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Heart, MessageCircle, MoreHorizontal, Repeat2, Send } from 'lucide-react';
import Image from "next/image";
import DropdownMenuHome from "./dropdown";
import Navbar from "./navbar";
import HomePost from "./post";
import { PostAvatar } from "./post/post-avatar";
import { RepliesAvatar } from "./post/replies-avatar";
import styles from './styles.module.css';

export default function Home() {
  return (
    <main >
      <nav className="flex justify-between items-center py-1 px-6">
        <Image src={LogoThreads} alt="Icone Threads" height={32}></Image>
        <Navbar />
        <DropdownMenuHome />
      </nav>
      <article className="max-w-lg m-auto">
        <section>
          <HomePost />
        </section>
        <hr className="my-4 h-[0.5px] opacity-20" />
        <section className={styles.container}>
          <div className={styles.avatar}>
            <PostAvatar src="https://github.com/johnwilliamam.png" fallbackInitials="JW" />
          </div>
          <div className={styles.username}>
            <p>johnwilli_am</p>
          </div>
          <div className={cn(styles.more, "flex items-center gap-1")}>
            <span>
              00h
            </span>
            <Button variant="outline" size='icon' className="rounded-full border-none">
              <MoreHorizontal />
            </Button>
          </div>
          <div className={styles.separator}>
            <span className="border-l-zinc-800 h-full border-l-[2px] block ml-5 my-5"></span>
          </div>
          <div className={styles.post}>
            <p>
              Olha só que incrivel esse clone da última rede social, promissora diga-se de passagem, do gênio Mark Zuckerberg!
              Você já usa o Threads ou ainda prefere a X?
              &#128516;
            </p>
          </div>
          <div className={cn(styles.reply_avatar, 'm-auto')}>
            <RepliesAvatar data={[{
              src: "https://github.com/", fallbackInitials: "JW",
            },
            {
              src: "https://github.com/johnwilliamam.png", fallbackInitials: "JW"
            }
            ]} />
          </div>
          <div className={cn(styles.actions, "flex space-x-2 mt-3")}>
            <Heart />
            <MessageCircle />
            <Repeat2 />
            <Send />
          </div>
          <div className={styles.likes_replies}>
            <span className="text-sm text-neutral-500">
              1 resposta - 99 curtidas
            </span>
          </div>
        </section>
      </article>
    </main>
  )
}
