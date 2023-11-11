import { NewPost } from "./new-post";
import { PostAvatar } from "./post-avatar";

type PostAvatarProps = {
    src?: string;
    fallbackInitials: string;
    username: string;
}
export default function HomePost({ src, fallbackInitials, username }: PostAvatarProps) {

    return (
        <div className="flex justify-between items-center gap-3">
            <PostAvatar src={src} fallbackInitials={fallbackInitials} />
            <NewPost src={src} fallbackInitials={fallbackInitials} username={username} page='home' />
            <div className="gap-2 w-max h-9">
                <div className="rounded-xl aria-disabled text-neutral border border-gray-500 hover:cursor-not-allowed bg-neutral-500">
                    <div className="font-semibold text-sm m-1 text-black">Publicar</div>
                </div>
            </div>
        </div>
    )
}