import {
  Dialog,
  DialogTrigger
} from "@/components/ui/dialog"
import styles from '../styles.module.css'
export function NewPost() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="text-neutral-500 flex-1 font-light">Inicie uma thread...</p>
      </DialogTrigger>
      <div role="dialog" className="" tabIndex={-1}>
        <div>
          <div></div>
          <div>
            <div>
              <span>Nova thread</span>
            </div>
            <div className="w-full">
              <div className={styles.container2}>
                <div className={styles.inputArea}><input type="text"></input></div>
                <div className={styles.textResp}><span>Qualquer pessoa pode responder</span></div>
                <div className={styles.buttonShare}>
                  <div className="gap-2 w-max h-9">
                    <div className="rounded-xl aria-disabled text-neutral border border-gray-500 hover:cursor-not-allowed" role="button" tabIndex={-1}>
                      <div className="font-semibold text-sm m-1 text-neutral-500">Publicar</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
