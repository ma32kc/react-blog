import React, { useState } from 'react'
import {IPost} from "../models/models"
import MyButton from "./UI/MyButton";
import {useCreatePostMutation, useUpdatePostMutation} from "../store/jsonplaceholder/jsonplaceholder.api";
interface IPostFormProps {
    onSubmit: (post: IPost) => void
    isCreate: boolean
    post?: IPost
}

const PostForm = ({ onSubmit, isCreate, post }: IPostFormProps) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [createPost] = useCreatePostMutation()
    const [updatePost] = useUpdatePostMutation()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (isCreate) {
            const newPost: IPost = { userId: 1, id: Date.now(), title, body }
            onSubmit(newPost)
            createPost(newPost)
            setTitle('')
            setBody('')
        }
        else {
            const updatedPost: IPost = {
                userId: post?.userId || 0,
                id: post?.id || 0,
                title: title,
                body: body
            };
            updatePost({ id: post?.id!, post: updatedPost} as Partial<IPost>)
            onSubmit(updatedPost)
            setTitle('')
            setBody('')
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-4 mt-3 p-2">
            <h2 className="text-center text-xl">Форма создания поста</h2>
            <label className="flex gap-4 items-baseline">
                Title:
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border-2 border-solid border-amber-300 mb-4 px-2"
                />
            </label>
            <label className="flex gap-4 items-baseline">
                Body:
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="border-2 border-solid border-amber-300 mb-4 px-2"
                />
            </label>
            <MyButton label={isCreate? "Создать пост": "Изменить пост"} onClick={() => handleSubmit} classes="w-[200px]"/>
        </form>
    );
};

export default PostForm