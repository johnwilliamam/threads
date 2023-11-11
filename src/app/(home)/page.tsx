import Navbar from "./navbar";
import HomePost from "./post";
import { Feed } from "./post/feed";

export default function Home() {
  return (
    <main >
      <nav className="flex justify-between items-center py-1 px-6">
        <Navbar />
      </nav>
      <article className="max-w-lg m-auto">
        <section>
          <HomePost src="https://scontent.cdninstagram.com/v/t51.2885-19/357376107_1330597350674698_8884059223384672080_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent.cdninstagram.com&_nc_cat=1&_nc_ohc=DAE4RaO6OucAX-o29VY&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfD8ET8S-W7_WkIBWyTZo62ELXeQ8te5EXPHgggBM9iV-A&oe=6552FAC0&_nc_sid=10d13b" fallbackInitials="MK" username="zuck" />
        </section>
        <span className="border-b-zinc-700 h-full border-b-[1px] block ml-5 my-2"></span>
        <hr className="my-4 h-[0.5px] opacity-20" />
        <Feed />
      </article>
    </main>
  )
}
