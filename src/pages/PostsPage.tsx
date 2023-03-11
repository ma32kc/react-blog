import {useSearchPostsQuery} from "../store/jsonplaceholder/jsonplaceholder.api";

export function PostsPage() {
    const {isLoading, isError, data} = useSearchPostsQuery({limit: 10})
    return (
        <div className="flex justify-center pt-10 mx-auto">
            {isError && <p className="text-red-600 text-center">Ошибка!</p>}
            <div className="flex flex-col gap-3">
                <h1 className="text-center text-3xl font-bold text-gray-700">Посты</h1>
                {data?.map(post =>
                    <div className="border-2 border-amber-300 border-solid p-3">
                        <p className="font-bold text-lg">Автор: Блогер {post.userId}</p>
                        <h2 className="font-bold text-lg">{post.title}</h2>
                        <p className="capitalize">{post.body}</p>
                    </div>
                )}
            </div>
        </div>
    )
}