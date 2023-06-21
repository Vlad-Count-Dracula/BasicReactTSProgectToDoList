import PostItem from "./PostItem";
import { itemType } from './../App';
import { FC } from "react";
import s from './PostList.module.css';

interface PropsType {
    item: Array<itemType>
    deletePost: (id: number) => void
    error : string
}



const PostList: FC<PropsType> = ({ item, deletePost, error }) => {

    if (!item.length) {
        return <h1>Posts not found</h1>
    } else if (error) {
        return <h2>{error}</h2>
    }


    return (
        <div className={s.container}>
                {item.map((item, index) => (
                        <PostItem deletePost={deletePost} item={item} index={index + 1} key={item.id}/>
                ))}
        </div>
    )

};

export default PostList;