"use client"
import {
  Dialog,
  DialogTrigger
} from "@/components/ui/dialog"
import { addPost } from "@/utils/new-post"
import { DialogContent, DialogOverlay } from "@radix-ui/react-dialog"
import { Image, PenSquare } from "lucide-react"
import { useState } from "react"
import styles from '../styles.module.css'
import { PostAvatar } from "./post-avatar"

type PostAvatarProps = {
  src?: string;
  fallbackInitials: string;
  username: string;
  page: string;
}
export function NewPost({ src, fallbackInitials, username, page }: PostAvatarProps) {
  const [change, setChange] = useState(true)
  const [published, setPublished] = useState(false)
  let postData = ''
  const changeInput = (e: any) => {
    e.target.value == '' ? setChange(true) : setChange(false)
    postData = e.target.value
  }
  const createPost = async ()=>{
    let user = {
      profilePicture: {
        src: src,
        fallbackInitials: fallbackInitials
      },
      name: username
    }
    let text = await addPost(postData, user)
    text == true ? setPublished(false) : setChange(true)
  }
  return (
    <Dialog open={published}>
      <DialogTrigger asChild onClick={()=> setPublished(true)}>{
        page == 'notify' ? <PenSquare size={28} className='text-neutral-600 border-none hover:cursor-pointer' /> :
          <p className="text-neutral-500 flex-1 font-light">Inicie uma thread...</p>
      }
      </DialogTrigger>
      <DialogOverlay className={styles.DialogOverlay} />
      <DialogContent className={styles.DialogContent}>
        <div className="grid grid-cols-3 bg-transparent h-11 p-6">
          <div className={styles.newThread}>
            <span className={styles.textThread}>Nova thread</span>
          </div>
          <span className="flex p-1 items-stretch rounded-[50%] mr-[-6px] mt-0 mb-0 mx-0 justify-end hover:cursor-pointer">...</span>
        </div>
        <div className={styles.bottomDialog}>
          <div className={styles.container2}>
            <div className={styles.containerInput}>
              <div className={styles.userPhoto}><PostAvatar src={src} fallbackInitials={fallbackInitials} /> </div>
              <div className={styles.userName}>{username}</div>
              <div className={styles.inputThread} id='text-post'><input type="text" placeholder="Inicie uma thread..." onChange={(e)=>changeInput(e)} /></div>
              <div className={styles.galleryIcon}><Image /></div>
            </div>
            <div className="flex justify-around">
              <span>Qualquer pessoa pode responder</span>
              <div className="gap-2 w-max h-9">
                {change == true ?
                  <div className="rounded-xl aria-disabled text-neutral border border-gray-500 hover:cursor-not-allowed bg-neutral-500">
                    <div className="font-semibold text-sm m-1 text-black">Publicar</div>
                  </div>
                  :
                  <div className="rounded-xl text-neutral border border-gray-500 bg-white">
                    <button className="font-semibold text-sm m-1 text-black" onClick={createPost}>Publicar</button>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
