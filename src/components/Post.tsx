import {IPost} from "../models/models";

export function Post(post: IPost) {
    return (
        <div className="">
            <p className="font-bold text-lg">Автор: Блогер {post.userId}</p>
            <h2 className="font-bold text-lg">{post.title}</h2>
            <p className="capitalize">{post.body}</p>
        </div>
    )
}