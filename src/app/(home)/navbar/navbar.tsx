'use client'
import LogoThreads from "@/assets/logo-threads.svg";
import { cn } from '@/lib/utils';
import { Heart, HomeIcon, PenSquare, Search, User } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation';
import DropdownMenuHome from "../dropdown";

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
            <ul className="flex">
                {menus.map(menu => (
                    <li className="px-7 py-5 hover:bg-neutral-800 rounded-xl transition-all duration-300 ease-in-out"
                        key={menu.alt}
                        title={menu.alt}>
                        <Link href={menu.route}>
                            <menu.logo size={28} className={cn('text-neutral-600 border-none', {
                                'text-threads-text': currRoute == menu.route,
                                'fill-gray-200': currRoute == '/' && menu.logo ==  HomeIcon || currRoute == '/notify' && menu.logo == Heart
                            })} />
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="relative right-[5%]">
                <DropdownMenuHome />
            </div>
        </>
    )
}