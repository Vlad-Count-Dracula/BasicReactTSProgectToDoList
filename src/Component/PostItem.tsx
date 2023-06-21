import { itemType } from "../App";
import Button from "../UI/Button/Button";
import { FC } from 'react';
import s from './PostItem.module.css';
import { Link } from "react-router-dom";



interface itemProps {
    item: itemType
    index: number
    deletePost: (id: number) => void
}

const PostItem: FC<itemProps> = ({ item, index, deletePost }) => {



    return (
        <div className={s.container}>
            <div className={s.info}>
                <h1 className={s.id}>{item.id}</h1>
                <h2 className={s.title}>{item.title}</h2>
            </div>
            <div className={s.button}>
                <Link to={`/posts/${item.id}`} ><Button>Open</Button></Link>
            </div>
            <div className={s.button}>
                <Button onClick={() => deletePost(item.id)}>Delete</Button>
            </div>
        </div>
    )

};

export default PostItem;