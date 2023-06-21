import { FC } from "react"
import { optionsType } from "../App";
import { searchType } from './../App';

interface MySortProps {
    options: Array<optionsType>
    setSearch: (sortedBy: searchType) => void
    defaultValue: string
    value: searchType
}

const MySelect: FC<MySortProps> = ({ options, setSearch, defaultValue, value }) => {



    return (
        <select value={value.selectedSort} onChange={e => setSearch({ ...value, selectedSort: e.target.value })}>
            <option disabled>{defaultValue}</option>
            {options.map(option => <option key={option.value} value={option.value}>{option.name}</option>)}
        </select>
    )
}

export default MySelect;