import {useSearchPostsQuery} from "../store/jsonplaceholder/jsonplaceholder.api";
import {Post} from "../components/Post";

export function PostsPage() {
    const {isLoading, isError, data} = useSearchPostsQuery({limit: 10})
    return (
        <div className="flex flex-col justify-center pt-10 mx-auto px-4">
            {isError && <p className="text-red-600 text-center">Ошибка!</p>}
            <div>
                <h1 className="text-center text-3xl font-bold text-gray-700 mb-5">Посты</h1>
                <ul className="flex flex-col gap-3">
                    {data?.map(post =>
                        <li className="border-2 border-amber-300 border-solid p-3" key={post.id}>
                            <Post userId={post.userId} body={post.body} id={post.id} title={post.title}/>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}