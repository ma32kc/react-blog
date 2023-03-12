import {IPost} from "../models/models"
import MyButton from "./UI/MyButton"
import {useNavigate} from "react-router-dom"

interface IPostProps {
    post: IPost;
    onDelete: (postId: number) => void;
}

export function Post({post, onDelete}: IPostProps) {

    const navigate = useNavigate()

    const handleOpen = () => {

        console.log(navigate(`/post/${post.id}`))
    };

    const handleDelete = () => {
        onDelete(post.id);
    };

    return (
        <div className="flex justify-between items-center">
            <div>
                <p className="font-bold text-lg">Автор: Блогер {post.userId}</p>
                <h2 className="font-bold text-lg">{post.title}</h2>
                <p className="capitalize">{post.body}</p>
            </div>
            <div>
                <MyButton onClick={handleOpen} label="Открыть"/>
                <MyButton onClick={handleDelete} label="Удалить"/>
            </div>
        </div>
    )
}