import { FC } from "react";
import { optionsType } from "../App";
import Input from "../UI/Input/Input";
import MySelect from "./MySort";
import { searchType } from '../App';


interface ComponentProps {
    search : searchType
    setSearch : (sort : searchType) => void
    options : Array<optionsType>
}


const ComponentOfSelection : FC<ComponentProps> = ({search, setSearch, options}) => {
    return (
        <div>
            <Input value={search.searchValue}
                onChange={(sort) => setSearch({...search, searchValue : sort.target.value})} />

            <MySelect defaultValue="Select your choice"
                value={search}
                setSearch={setSearch}
                options={options} />
        </div>
    )
}

export default ComponentOfSelection;