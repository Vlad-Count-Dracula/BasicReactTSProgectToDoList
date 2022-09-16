import axios from "axios";
import React, { useState } from "react";
import { IProduct } from "../models";
import { ErrorComponent } from "./Error";


const productBody: IProduct = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 10,
        count: 20,
    }
}

interface PropsType {
    onChange : (newData: IProduct) => void
}



export const CreateProduct = ({ onChange } : PropsType) => {

    const [value, setValue] = useState<string>(' ');
    const [error, setError] = useState<string>('');

    const useSetValue = (e: React.KeyboardEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const hedlerSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('')

        if (value.trim().length === 0) {
            setError('Please write a variable title!');
            return
        };
        productBody.title = value;
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productBody)
        onChange(response.data);
         
    };


    return (
        <>
            <form onSubmit={hedlerSubmit} className=" w-[400px] mx-auto" >
                <input type="text" placeholder="Write a title" className=" border w-full my-2 outline-0 " value={value} onChange={useSetValue} />
                <button type="submit" className=" bg-amber-400 border px-4 py-1 mb-2 hover:text-white" >Create</button>
                {error && <ErrorComponent error={error} />}
            </form>
        </>
    )
};

