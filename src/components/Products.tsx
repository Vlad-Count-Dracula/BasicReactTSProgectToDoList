import { useState } from "react";
import { IProduct } from "../models";

interface PropsType {
    products: IProduct
};

const Product = (props: PropsType) => {
    const [visible, setVisible] = useState(false);

    const choseColor = visible ? 'bg-slate-700' : 'bg-orange-300';

    const changeBgColor = ['mx-auto py-3 px-10 rounded-lg ', choseColor];

    return (
        <div className="flex flex-col justify-center border-2 my-10">
            <div className='relative max-w-xs mx-auto'>
                <img src={props.products.image} alt={props.products.title} />
            </div>
            <p className="block mx-auto">{props.products.title}</p>
            <p className="block mx-auto">{props.products.price}$</p>
            <button onClick={() => setVisible(prevVisible => !prevVisible)} className={changeBgColor.join(' ')}>
                {visible ? 'Hide Content' : 'Show Content'}
            </button>
            <div className="mx-auto px-72 text-center">
                {visible && props.products.description}
            </div>
            <div className="mx-auto text-lg font-bold">
                {props?.products?.rating?.count}
            </div>
        </div>
    )
};

export default Product;

