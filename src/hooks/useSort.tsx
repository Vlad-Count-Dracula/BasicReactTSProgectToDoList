import { useMemo } from 'react';
import { searchType, itemType } from './../App';



export const useSortedArrey = (search: searchType, item: Array<itemType>) => {
    const sortedAction: Array<itemType> = useMemo(() => {
        if (search.selectedSort) {
           return [...item].sort((a: itemType, b: itemType) =>
                search.selectedSort === 'title' ? a.title.localeCompare(b.title) :
                    a.id ) 
        } else {
            return item
        }
    }, [search.selectedSort, item]);

    return sortedAction

}


export const useSortedPosts = (search: searchType, item: Array<itemType>) => {
    const sortedPosts : Array<itemType> = useSortedArrey(search, item)
    const sortedBySearching = useMemo(() => {
       return [...sortedPosts].filter(post => (
        post?.title?.toLocaleLowerCase().includes(search.searchValue.toLocaleLowerCase()  
        )))
    }, [search.searchValue, sortedPosts])

    return sortedBySearching
}