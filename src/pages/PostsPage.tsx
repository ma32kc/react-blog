import {useSearchPostsQuery} from "../store/jsonplaceholder/jsonplaceholder.api";

export function PostsPage() {
    const {isLoading, isError, data} = useSearchPostsQuery(10)
    return (
        <div>Главная</div>
    )
}