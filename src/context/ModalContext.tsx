import { createContext, useState } from "react";

interface IModalContext {
    modal : boolean,
    open : () => void,
    close : () => void,
}

export const ModalContext = createContext<IModalContext>({
    modal : false,
    open : () => {},
    close : () => {},
});

interface IModalProvider {
    children : React.ReactNode,
}

export const ModalProvider = ({children} : IModalProvider) => {

    const [modal , setModal] = useState<boolean>(false);
    const open = () => setModal(true);
    const close = () => setModal(false);

    return (
        <ModalContext.Provider value={{modal, open, close}}>
            {children}
        </ModalContext.Provider>
    )
}