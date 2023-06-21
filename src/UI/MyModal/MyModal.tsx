import { FC } from 'react';
import s from './MyModal.module.css';

interface ModalProps {
    children?: any
    active: boolean
    setActive: (action: boolean) => void
}

const MyModal: FC<ModalProps> = ({children, active, setActive}) => {

    const classesArrey: Array<string> = [s.myModal]

    if (active) {
        classesArrey.push(...classesArrey, s.active)
    }

    return (
        <div className={classesArrey.join(' ')} onClick={() => setActive(false)}>
            <div className={s.form} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default MyModal;