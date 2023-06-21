import { useEffect } from "react";
import { pagination } from "../App";




export const useObserver = (isLoading : boolean, pagination : pagination, setPagination : (pagination : pagination) => void, anchorForBlock : string)  => {
    useEffect(() => {

        if (isLoading) return;
    
        const callback = function (entris: any) {
          if (entris[0].isIntersecting && pagination.page < pagination.commonPages) {
            if(observer) observer.disconnect();
            console.log(pagination.page)
            setPagination({ ...pagination, page: pagination.page + 1 })
          }
    
    
        }  

        const target: any = document.querySelector(`#${anchorForBlock}`);
    
        let observer : any = new IntersectionObserver(callback);
    
        observer.observe(target);
    
      }, [isLoading])
}