import { NewPost } from "./new-post";
import { PostAvatar } from "./post-avatar";

export default function HomePost() {
    return (
        <div className="flex justify-between items-center gap-3">
            <PostAvatar src="https://github.com/johnwilliamam.png" fallbackInitials="JW" />
            <NewPost />
            <div className="gap-2 w-max h-9">
                <div className="rounded-xl aria-disabled text-neutral border border-gray-500 hover:cursor-not-allowed">
                    <div className="font-semibold text-sm m-1 text-neutral-500">Publicar</div>
                </div>
            </div>
        </div>
    )
}