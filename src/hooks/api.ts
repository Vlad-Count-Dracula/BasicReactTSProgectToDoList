import { IProduct } from './../models';
import axios , { AxiosError } from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';




export const ApiRequestProducts = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [error, setError] = useState('');
    const [loader, setLoader] = useState<boolean>(false);

    function setProduct(data: IProduct) {
        setProducts(prev => [...products, data]);
    }

    async function fetchDataProducts() {
        try {
            setError('');
            setLoader(true);
            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
            setProducts(response.data);
            setLoader(false);
        } catch (e: unknown) {
            const error = e as AxiosError;
            setLoader(false);
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchDataProducts();
    }, []);

    return {products, error, loader, setProduct};
};
