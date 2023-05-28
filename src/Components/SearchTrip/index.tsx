import { useState } from "react";
import BasicDateRangePicker from "../global/Datepicker";
import { Input } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
export default function SearchTrip() {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;




    return (
        <div className="search">
            <div className="heading">Busque sua viagem</div>

            <label
                className="search__from search__from--label"
                htmlFor="search-from"
            >
                Saindo de:
            </label>
            <Select
                className="search__from search__from--input"
                placeholder='Select option'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
            </Select>
            <label
                className="search__from search__to--label"
                htmlFor="search-to"
            >
                Para:
            </label>
            <Select
                className="search__to search__to--input"
                placeholder='Select option'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
            </Select>
        </div>
    )
}