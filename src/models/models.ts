export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface GetPostsArgs {
    limit?: number;
    title_like?: string;
}

export interface GetPostArgs {
    id: number
}