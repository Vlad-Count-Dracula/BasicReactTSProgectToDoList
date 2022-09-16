interface ModalType {
    children: React.ReactNode,
    title : string,
    onClose : () => void,
}

export const Modal = ({ children, title, onClose }: ModalType) => {
    return (
        <>
            <div className=" fixed bg-black opacity-50 bottom-0 left-0 top-0 right-0 " onClick={onClose}/>
            <div className="fixed w-[500px] left-1/3 top-20 bg-white  rounded-lg">
                <p className="text-lg">{title}</p>
                {children}
            </div>
        </>
    )
};