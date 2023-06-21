import { useState } from 'react';

export const useFetching = (callback : any) => {

    const [isLoading, setIsloading] = useState(false)
    const [error, setError] = useState('')

    async function fetching() {
        try {
            setIsloading(true)
            await callback()
        } catch (e: any) {
            setError(e.message)
        } finally {
            setIsloading(false)
        }
    }
    return [fetching, isLoading, error]

}