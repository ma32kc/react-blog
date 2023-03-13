import {IPost} from "../models/models"
import MyButton from "./UI/MyButton"
import {useNavigate} from "react-router-dom"
import {useDeletePostMutation} from "../store/jsonplaceholder/jsonplaceholder.api";

interface IPostProps {
    post: IPost;
    onDelete: (postId: number) => void;
}

export function Post({post, onDelete}: IPostProps) {

    const navigate = useNavigate()
    const [deletePost] = useDeletePostMutation()

    const handleOpen = () => {
        navigate(`/post/${post.id}`)
    };

    const handleDelete = () => {
        deletePost({id: post.id})
        onDelete(post.id)
    };

    return (
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
                <p className="font-bold text-lg">Автор: Блогер {post.userId}</p>
                <h2 className="font-bold text-lg">{post.title}</h2>
                <p className="capitalize">{post.body}</p>
            </div>
            <div className="flex gap-4">
                <MyButton onClick={handleOpen} label="Открыть"/>
                <MyButton onClick={handleDelete} label="Удалить"/>
            </div>
        </div>
    )
}