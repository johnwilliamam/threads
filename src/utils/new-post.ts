import { posts } from "./posts";

type PostProps = {
  id: number;
  user: User;
  createdAt: string;
  content: string;
  replies: Replies;
  likes: number;
}
type User = {
  profilePicture: Profile;
  name: string;
}
type Profile = {
  src?: string;
  fallbackInitials: string;
}
type Replies = {
  count: number;
  avatars: Profile[] | []
}
export function addPost(content: string, user: User) {
  try {
    let post = {} as PostProps;
    const id = posts.length + 1
    post.id = id
    post.content = content
    post.createdAt = new Date().toISOString()
    console.log(post)
    post.user = user
    post.likes = 0
    let replie = {
      count: 0,
      avatars: []
    }
    post.replies = replie
    posts.push(post)
    return true
  } catch (e) {
    console.log(e)
    return false
  }
}