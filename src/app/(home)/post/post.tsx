import { Button } from "@/components/ui/button";
import { NewPost } from "./new-post";
import { PostAvatar } from "./post-avatar";

export default function HomePost() {
    return (
        <div className="flex justify-between items-center gap-3">
            <PostAvatar src="https://github.com/johnwilliamam.png" fallbackInitials="JW"/>
            <NewPost />
            <Button disabled variant='outline' className="rounded-xl text-neutral">Publicar </Button>
        </div>
    )
}