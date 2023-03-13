import {useSearchPostsQuery} from "../store/jsonplaceholder/jsonplaceholder.api"
import {Post} from "../components/Post"
import {useEffect, useMemo, useState} from "react"
import MyButton from "../components/UI/MyButton"
import Modal from "../components/UI/Modal"
import PostForm from "../components/PostForm"
import useModal from "../hooks/useModal"
import {IPost} from "../models/models"

export function PostsPage() {
    const {isLoading, isError, data} = useSearchPostsQuery({limit: 10})
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [posts, setPosts] = useState<IPost[]>([])
    let filteredPosts = useMemo(() => {
        return posts?.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [posts, searchQuery])
    const {isOpen, toggle} = useModal()

    const handleCreatePost = (post: IPost) => {
        setPosts([...posts, post])
        toggle()
    }

    const handleDeletePost = (postId: number) => {
        setPosts(posts.filter(post => post.id !== postId))
    }

    useEffect(() => {
        if (data) {
            setPosts(data)
        }
    }, [data])

    return (
        <div className="flex flex-col justify-center pt-10 mx-auto px-4 pb-5">
            {isError && <p className="text-red-600 text-center">Ошибка!</p>}
            <div className="flex flex-col gap-4">
                <h1 className="text-center text-3xl font-bold text-gray-700">Посты</h1>
                <form action="#" onSubmit={e => e.preventDefault()}
                      className="flex flex-col items-baseline gap-4 text-lg sm:flex-row">
                    <label form="searchInput" className="text-xl">Поиск по названию:</label>
                    <input
                        type="text"
                        id="searchInput"
                        className="border-2 border-solid border-amber-300 mb-4 px-2"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}/>
                </form>
                <MyButton label="Добавить пост" onClick={toggle} classes="w-[200px]"/>
                <Modal isOpen={isOpen} toggle={toggle}>
                    <PostForm onSubmit={handleCreatePost}/>
                </Modal>
                {filteredPosts?.length ?
                    <ul className="flex flex-col gap-3">
                        {isLoading && <p className="text-center text-2xl">Загрузка...</p>}
                        {filteredPosts?.map(post =>
                            <li className="border-2 border-amber-300 border-solid p-3" key={post.id}>
                                <Post post={post} onDelete={handleDeletePost}/>
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