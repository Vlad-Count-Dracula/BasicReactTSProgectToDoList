import { FC, useEffect, useState } from "react";
import { fetchingPosts } from "../../API/PostServer";
import { itemType, optionsType } from "../../App";
import ComponentOfSelection from "../../Component/ComponentOfSelection";
import PostForm from "../../Component/PostForm";
import PostList from "../../Component/PostList";
import { useFetching } from "../../hooks/useFetching";
import { useObserver } from "../../hooks/useObserver";
import { useSortedPosts } from "../../hooks/useSort";
import { totalCount } from "../../utils/totalCount";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import MyModal from "../MyModal/MyModal";
import PagesNumber from "../PagesNumber/PagesNumer";
import s from './Posts.module.css';



const Posts: FC = () => {

  const anchorForBlock = 'scrollArea';

  const [item, setItem] = useState<Array<itemType>>([])
  const [search, setSearch] = useState({ selectedSort: '', searchValue: '', })
  const [modal, setModal] = useState(false)
  const sortedBySearching = useSortedPosts(search, item)
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    commonPages: 0,
  })

  const [fetching, isLoading, error]: Array<any> = useFetching(async () => {
    const response = await fetchingPosts(pagination.limit, pagination.page);
    setItem([...item, ...response.data]);
    setPagination({ ...pagination, commonPages: totalCount(100, pagination.limit) })
  });


  useObserver(isLoading, pagination, setPagination, anchorForBlock)


  useEffect(() => {
    fetching()
  }, [pagination.page])


  const options: Array<optionsType> = [
    { value: 'title', name: 'Sort by title' },
    { value: 'body', name: 'Sort by number' },
  ]


  function addPost(newPost: itemType) {
    setItem([...sortedBySearching, newPost])
    setModal(false)
  }

  function deletePost(id: number) {
    setItem([...sortedBySearching].filter(p => p.id !== id))
  }

  return (
    <div className={s.container}>
      <br />
      <Button onClick={() => setModal(true)}>
        Create post
      </Button>
      <MyModal active={modal} setActive={setModal}>
        <PostForm addPost={addPost} />
      </MyModal>



      <ComponentOfSelection
        search={search}
        setSearch={setSearch}
        options={options} />

      <PostList error={error} deletePost={deletePost} item={sortedBySearching} />

      {isLoading && <Loader />}

      <div id={anchorForBlock} />

      <PagesNumber setPagePosts={setPagination} pagination={pagination} />
    </div>
  )
}



export default Posts;