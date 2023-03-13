import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {GetPostArgs, GetPostsArgs, IComment, IPost} from "../../models/models";

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
        searchPostComments: build.query<IComment[], GetPostArgs>({
            query: (args) => ({
                url: `posts/${args.id}/comments`,
                params: {
                    _limit: args.limit
                }
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
        updatePost: build.mutation<IPost,  Partial<IPost>>({
            query: (post) => ({
                url: 'posts/' + post.id,
                method: 'PUT',
                body: post
            })
        }),
    })
})

export const {
    useSearchPostsQuery,
    useSearchPostByIdQuery,
    useSearchPostCommentsQuery,
    useCreatePostMutation,
    useDeletePostMutation,
    useUpdatePostMutation
} = jsonplaceholderApi