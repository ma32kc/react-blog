import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useSearchPostByIdQuery} from "../store/jsonplaceholder/jsonplaceholder.api";
import {IPost} from "../models/models";

export function PostPage() {

    const { id } = useParams<{ id: string }>()
    const [post, setPost] = useState<IPost>()
    const {isLoading, isError, data} = useSearchPostByIdQuery({id: +id!})

    useEffect(() => {
        if (data) {
            setPost(data[0])
            console.log(post)
        }
    }, [data, post])

    return (
        <div className="">
            {isError && <p>Ошибка</p>}
            {isLoading && <p>загрузка</p>}
            <h1>Пост с id = {post?.id}</h1>
            <div>
                <p>{post?.title}</p>
                <p>{post?.body}</p>
            </div>
        </div>
    )
}