import React from 'react'
import style from './style.module.scss'
import { Search } from 'react-feather'
import useSearch from './useSearch'

const Index = () => {
    const { setTerm, setIsSearching, noResult, term } = useSearch()

    const handleSearch = e => {
        setTerm(e.target.value)
        setIsSearching(true)
    }

    return <>
        <div className={style.search_wrapper}>
            <div className="container">
                <div className={style.search_group}>
                    <input name="search" placeholder="Search Movies..." onChange={handleSearch}/>
                    <Search className={style.icon} color="#8dc63f"/>
                </div>
            </div>
            {noResult && <div className={style.no_result}>Your search - <span>{term}</span> - did not match any movie.</div>}
        </div>
    </>
}

export default Index