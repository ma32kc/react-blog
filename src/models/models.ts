export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface GetPostsArgs {
    limit?: number;
}