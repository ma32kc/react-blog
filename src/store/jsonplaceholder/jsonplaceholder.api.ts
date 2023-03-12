import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {GetPostArgs, GetPostsArgs, IPost} from "../../models/models";

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
        }),
        searchPostById: build.query<IPost[], GetPostArgs>({
            query: (args) => ({
                url: 'posts/',
                params: {
                    id: args.id
                }
            }),
            transformResponse: (response: IPost[]) => response
        })
    })
})

export const {useSearchPostsQuery, useSearchPostByIdQuery} = jsonplaceholderApi