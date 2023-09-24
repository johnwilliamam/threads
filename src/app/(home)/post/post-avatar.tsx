import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type PostAvatarProps = {
    src?: string;
    fallbackInitials: string;
}
export const PostAvatar = ({ src, fallbackInitials }: PostAvatarProps) => (
    <div className="w-10 h-10">
        <Avatar>
            <AvatarImage src={src} alt={fallbackInitials} />
            <AvatarFallback>{fallbackInitials}</AvatarFallback>
        </Avatar>
    </div>
    )