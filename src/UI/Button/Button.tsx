import { FC } from "react";
import s from './Button.module.css';



interface ButtomProps {
    children?: any
    onClick? : (event : React.MouseEvent<HTMLButtonElement>) => void
}


const Button: FC<ButtomProps> = (props) => {



    return (
        <div>
            <button {...props} className={s.btn} >{props.children}</button>
        </div>
    )

}

export default Button;