import { FC } from 'react';
import { pagination } from '../../App';
import Button from '../Button/Button';
import { usePagination } from './../../hooks/usePagination';
import s from "./PagesNumber.module.css";

interface propsType {
    pagination: pagination
    setPagePosts: (num: pagination) => void
}

const PagesNumber: FC<propsType> = ({ pagination, setPagePosts }) => {

    const arrayPages: Array<number | null> = [];

    const pagesCount = usePagination(pagination.commonPages, arrayPages)

    return (
        <div>
            {pagesCount.map(p => <div className={s.pages} key={p} ><Button onClick={(e) => setPagePosts({ ...pagination, page: p })}>{p}</Button></div>)}
        </div>
    )
}

export default PagesNumber;