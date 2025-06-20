import { CloseIcon } from "../assets/icons"

const Modal = ({open, setOpen , children}) => {
  return (
    <div id="wrapper" onClick={(e) => e.target.id == "wrapper" && setOpen(false)} className={`fixed flex items-center justify-center ${open ? "" : "scale-0"} top-0 bottom-0 left-0 right-0 bg-[#00000027] backdrop-blur-[5px]`}>
        <div className={`absolute duration-300 ${open ? "" : "scale-0"} p-5 rounded-md bg-white shadow-md`}>
            <button onClick={() => setOpen(false)} className={`absolute ${open ? "" : "hidden"}  right-[10px] top-[10px] text-[var(--clr-text)]`}> <CloseIcon/> </button>
            {children}
        </div>
    </div>
  )
}

export default Modal