import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useSearchPostByIdQuery} from "../store/jsonplaceholder/jsonplaceholder.api";
import {IPost} from "../models/models";
import MyButton from "../components/UI/MyButton";

export function PostPage() {

    const {id} = useParams<{ id: string }>()
    const {isLoading, isError, data} = useSearchPostByIdQuery({id: +id!})



    return (
        <div className="mt-5">
            {isError ? <p className="text-center text-xl">Такого поста не найдено</p>
                :
                isLoading ? <p className="text-center text-xl">загрузка</p>
                    :
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 p-4 mx-4 shadow-lg bg-gray-100">
                        <div className="flex-col">
                            <h1 className="font-bold text-2xl">Пост {data?.id}</h1>
                            <div className="flex flex-col gap-4 md:gap-2">
                                <p className="font-semibold text-xl">{data?.title}</p>
                                <p className="text-lg">{data?.body}</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <MyButton onClick={() => {}} label="Изменить пост"/>
                            <MyButton onClick={()=>{}} label="Комментарии"/>
                        </div>
                    </div>
            }
        </div>
    )
}