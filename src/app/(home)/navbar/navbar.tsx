'use client'
import LogoThreads from "@/assets/logo-threads.svg";
import { cn } from '@/lib/utils';
import { Heart, HomeIcon, PenSquare, Search, User } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation';
import DropdownMenuHome from "../dropdown";
import { NewPost } from "../post/new-post";

const menus = [
    {
        logo: HomeIcon,
        alt: "Página Inicial",
        route: "/"
    },
    {
        logo: Search,
        alt: "Pesquisar usuário",
        route: "/search"
    },
    {
        logo: PenSquare,
        alt: "Inicie uma thread...",
        route: "/post"
    },
    {
        logo: Heart,
        alt: "Notificações",
        route: "/notify"
    },
    {
        logo: User,
        alt: "Perfil",
        route: "/profile"
    },
]
export default function Navbar() {
    const router = useRouter()
    const currRoute = usePathname()
    return (
        <>
            <div className="relative left-[5%]" role="button" onClick={() => router.push('/')}>
                <Image src={LogoThreads} alt="Icone Threads" height={32} />
            </div>
            <ul className="flex gap-3">
                {menus.map(menu => (
                    <li className="px-7 py-5 hover:bg-neutral-800 rounded-xl transition-all duration-300 ease-in-out"
                        key={menu.alt}
                        title={menu.alt}>
                        {menu.route == '/post'
                            ?
                            <NewPost src="https://scontent.cdninstagram.com/v/t51.2885-19/357376107_1330597350674698_8884059223384672080_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=DAE4RaO6OucAX-o29VY&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfD8ET8S-W7_WkIBWyTZo62ELXeQ8te5EXPHgggBM9iV-A&oe=6552FAC0&_nc_sid=10d13b" fallbackInitials="MK" username="zuck" page='notify' />
                            :
                            <Link href={menu.route}>
                                <menu.logo size={28} className={cn('text-neutral-600 border-none', {
                                    'text-threads-text': currRoute == menu.route,
                                    'fill-gray-200': currRoute == '/' && menu.logo == HomeIcon || currRoute == '/notify' && menu.logo == Heart
                                })} />
                            </Link>
                        }
                    </li>
                ))}
            </ul>
            <div className="relative right-[5%]">
                <DropdownMenuHome />
            </div>
        </>
    )
}