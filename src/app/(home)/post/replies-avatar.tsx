import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type RepliesAvatarProps = {
    data:{
        src?: string;
        fallbackInitials: string;
    }[];
};
let getClass = (index: number)=>{
    if(index === 0) return "static ml-0 h-5 w-5";
    return "static ml-[-0.5rem] w-5 h-5";
}
export const RepliesAvatar = ({ data }: RepliesAvatarProps) => (
    <div className="flex mt-5">
        {data.map((item, index)=>(
            <Avatar className={getClass(index)} key={item.src}>
            <AvatarImage src={item.src} alt={item.fallbackInitials} />
            <AvatarFallback>{item.fallbackInitials}</AvatarFallback>
        </Avatar>
            ))}
    </div>
    )