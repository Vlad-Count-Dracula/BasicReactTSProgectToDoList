export const totalCount = (totalPosts : number, limit: number) => {
    return Math.ceil(totalPosts/limit)
}