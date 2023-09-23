'use client'
import { cn } from '@/lib/utils';
import { Heart, HomeIcon, PenSquare, Search, User } from 'lucide-react';
import Link from "next/link";
import { usePathname } from 'next/navigation';

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
    const currRoute = usePathname()
    return (

        <ul className="flex">
            {menus.map(menu => (
                <li className="px-7 py-5 hover:bg-neutral-800 rounded-xl transition-all duration-300 ease-in-out"
                    key={menu.alt}
                    title={menu.alt}>
                    <Link href={menu.route}>
                        <menu.logo size={28} className={cn('text-neutral-600', {
                            'text-threads-text': currRoute == menu.route
                        })}
                        />
                    </Link>
                </li>
            ))}
        </ul>
    )
}