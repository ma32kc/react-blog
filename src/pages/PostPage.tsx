import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {
    useSearchPostByIdQuery,
    useSearchPostCommentsQuery
} from "../store/jsonplaceholder/jsonplaceholder.api";
import {IPost} from "../models/models";
import MyButton from "../components/UI/MyButton";
import PostForm from "../components/PostForm";
import Modal from "../components/UI/Modal";
import useModal from "../hooks/useModal";

export function PostPage() {

    const {id} = useParams<{ id: string }>()
    const {isLoading, isError, data} = useSearchPostByIdQuery({id: +id!})
    const [post, setPost] = useState<IPost>()
    const [commentsCount, setCommentsCount] = useState(0);
    const {
        isLoading: isLoadingComments,
        data: comments
    } = useSearchPostCommentsQuery({id: +id!, limit: commentsCount + 1})
    const {isOpen, toggle} = useModal()

    useEffect(() => {
        if (data) {
            setPost(data)
        }
    }, [data])

    const handleLoad = () => {
        setCommentsCount(commentsCount + 1);
    };

    const handleUpdate = (post: IPost) => {
        setPost(post)
        toggle()
    }

    return (
        <div className="mt-5">
            {isError ? <p className="text-center text-xl">Такого поста не найдено</p>
                :
                isLoading ? <p className="text-center text-xl">загрузка</p>
                    :
                    <div className="flex flex-col gap-4">
                        <div
                            className="flex flex-col md:flex-row justify-between md:items-center gap-4 p-4 mx-4 shadow-lg bg-gray-100">
                            <div className="flex-col">
                                <h1 className="font-bold text-2xl">Пост {post?.id}</h1>
                                <div className="flex flex-col gap-4 md:gap-2">
                                    <p className="font-semibold text-xl">{post?.title}</p>
                                    <p className="text-lg">{post?.body}</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <MyButton onClick={toggle} label="Изменить пост"/>
                                <Modal isOpen={isOpen} toggle={toggle}>
                                    <PostForm onSubmit={handleUpdate} isCreate={false} post={data}/>
                                </Modal>
                                <MyButton onClick={handleLoad} label="Комментарии"/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 p-4 mx-4 shadow-lg bg-gray-100">
                            <h2 className="font-bold text-2xl">Комментарии:</h2>
                            {isLoadingComments && <p>Загрузка</p>}
                            <ul className="flex flex-col gap-4">
                                {comments?.slice(0, commentsCount)?.map(com =>
                                    <li className="flex flex-col gap-4 border-b-2 pb-2 border-emerald-400" key={com.id}>
                                        <p className="font-bold text-lg">Блогер: {com.name}</p>
                                        <p className="font-bold text-lg">{com.email}</p>
                                        <p className="capitalize">{com.body}</p>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
            }
        </div>
    )
}