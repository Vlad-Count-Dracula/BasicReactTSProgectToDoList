import axios from "axios";


export async function fetchingPosts(limit: number = 10, page: number = 1) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
            _limit: limit,
            _page: page,
        }
    });
    return response;
}

export async function fetchingSelectedPost(id : any) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response;
}