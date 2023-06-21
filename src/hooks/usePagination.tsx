
import { useMemo } from 'react';



export const usePagination = (totalPages: number, arrayPages: Array<number | null>) => {

    const pagesNumber: Array<number | null> = useMemo(() => {
        for (let i = 0; i < totalPages; i++) {
            arrayPages.push(i + 1)
        }

        return arrayPages;

    }, [totalPages, arrayPages])

    return pagesNumber
} 