import { FC, useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import s from './PostForm.module.css';
import { itemType } from './../App';

interface PostFormProps {
    addPost: (newPost: itemType) => void
}

const PostForm: FC<PostFormProps> = ({ addPost }) => {

    const [post, setPost] = useState({
        title: '',
        description: '',
    })

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        addPost({id : Date.now, ...post})
        setPost({title: '', description: '',})
    }



    return <form className={s.container}>
        <div>
            <div>
                <Input value={post.title} onChange={e => setPost({...post, title : e.target.value})} placeholder='title' />
            </div>
            <div>
                <Input value={post.description} onChange={e => setPost({...post, description : e.target.value})} placeholder='description' />
            </div>
            <div>
                <Button onClick={handleClick} >Add Post</Button>
            </div>
        </div>
    </form>
}

export default PostForm