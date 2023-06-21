import { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchingSelectedPost } from "../API/PostServer";
import { useFetching } from "../hooks/useFetching";
import Loader from "../UI/Loader/Loader";

interface page {
    userId: any,
    id: any,
    title: string
    body: string
}

const PageByID: FC = () => {

    let { id } = useParams()

    const [page, setPage] = useState<page>()
    const [fetching, isLoading, error]: any = useFetching(async () => {
        const response = await fetchingSelectedPost(id);
        setPage(response.data)
    })

    useEffect(() => {
        fetching()
    }, [])

    if(error) {
        return <h1>{error}</h1>
    } 

    return (
        <>
        {isLoading ? 
        <Loader /> :
        <div>
            <h2> Open the post with number {id}</h2>
            <title>{page?.title}</title>
            <div>{page?.body}</div>
        </div>
        }
        </>
    )
}

export default PageByID;