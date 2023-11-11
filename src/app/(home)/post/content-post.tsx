import { DialogContent } from "@radix-ui/react-dialog";
import { Image } from "lucide-react";
import styles from '../styles.module.css';
import { PostAvatar } from "./post-avatar";


type PostAvatarProps = {
    src?: string;
    fallbackInitials: string;
    username: string;
  }
export function ContentPost({ src, fallbackInitials, username }: PostAvatarProps){
    return (
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
              <div className={styles.inputThread}><input type="text" placeholder="Inicie uma thread..." /></div>
              <div className={styles.galleryIcon}><Image /></div>
            </div>
            <div className="flex justify-around">
              <span>Qualquer pessoa pode responder</span>
              <button>Publicar</button>
            </div>
          </div>
        </div>
      </DialogContent>
    )
}