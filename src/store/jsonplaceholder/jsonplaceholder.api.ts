import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {GetPostsArgs, IPost} from "../../models/models";

export const jsonplaceholderApi = createApi({
    reducerPath: 'jsonplaceholder/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: build => ({
        searchPosts: build.query<IPost[], GetPostsArgs>({
            query: (args = {}) => ({
                url: 'posts',
                params: {
                    _limit: args.limit || 10,
                    title_like: args.title_like
                }
            }),
            transformResponse: (response: IPost[]) => response
        })
    })
})

export const {useSearchPostsQuery} = jsonplaceholderApi