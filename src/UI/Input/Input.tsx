import React, { FC } from 'react';
import s from './Input.module.css';

interface InputProps {
    type?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    value?: string
}

const Input: FC<InputProps> = (props) => {

    return (
        <input {...props} className={s.myInput}/>
    )

}

export default Input;