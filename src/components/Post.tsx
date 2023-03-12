import {IPost} from "../models/models"
import MyButton from "./UI/MyButton";

interface IPostProps {
    post: IPost;
    onDelete: (postId: number) => void;
}

export function Post({post, onDelete}: IPostProps) {

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
            <MyButton onClick={handleDelete} label="Удалить"/>
        </div>
    )
}