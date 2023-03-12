import {useSearchPostsQuery} from "../store/jsonplaceholder/jsonplaceholder.api";
import {Post} from "../components/Post";
import {useMemo, useState} from "react";

export function PostsPage() {
    const {isLoading, isError, data} = useSearchPostsQuery({limit: 10})
    const [searchQuery, setSearchQuery] = useState('')
    const filteredPosts = useMemo(() => {
        return data?.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [data, searchQuery])
    return (
        <div className="flex flex-col justify-center pt-10 mx-auto px-4">
            {isError && <p className="text-red-600 text-center">Ошибка!</p>}
            <div>
                <h1 className="text-center text-3xl font-bold text-gray-700 mb-5">Посты</h1>
                <form action="#" onSubmit={e => e.preventDefault()} className="flex flex-col items-baseline gap-4 text-lg sm:flex-row">
                    <label form="searchInput" className="text-xl">Поиск по названию:</label>
                    <input
                        type="text"
                        id="searchInput"
                        className="border-2 border-solid border-amber-300 mb-4 px-2"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}/>
                </form>
                {filteredPosts?.length ?
                    <ul className="flex flex-col gap-3">
                        {isLoading && <p className="text-center text-2xl">Загрузка...</p>}
                        {filteredPosts?.map(post =>
                            <li className="border-2 border-amber-300 border-solid p-3" key={post.id}>
                                <Post userId={post.userId} body={post.body} id={post.id} title={post.title}/>
                            </li>
                        )}
                    </ul>
                    :
                    <p className="text-2xl text-center border-2 border-amber-300">Постов нет</p>
                }

            </div>
        </div>
    )
}