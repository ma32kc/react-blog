import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const jsonplaceholderApi = createApi({
    reducerPath: 'jsonplaceholder/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: build => ({
        searchPosts: build.query<any, number>({
            query: (limit: number) => ({
                url: 'posts',
                params: {
                    _limit: limit || 10
                }
            })
        })
    })
})

export const {useSearchPostsQuery} = jsonplaceholderApi