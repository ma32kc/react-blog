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
            })
        }),
        searchPostById: build.query<IPost, GetPostArgs>({
            query: (args) => ({
                url: 'posts/' + args.id
            })
        }),
        createPost: build.mutation<IPost, Partial<IPost>>({
            query: (post) => ({
                url: 'posts/',
                method: 'POST',
                body: post
            })
        }),
        deletePost: build.mutation<IPost, GetPostArgs>({
            query: (args) => ({
                url: 'posts/' + args.id,
                method: 'DELETE'
            })
        }),
    })
})

export const {useSearchPostsQuery, useSearchPostByIdQuery, useCreatePostMutation, useDeletePostMutation} = jsonplaceholderApi