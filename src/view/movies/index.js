import React from 'react'
import style from './style.module.scss'

import { useSelector } from 'react-redux'

import Movie from "./movie"
import SearchMovies from '../search/index'

const Index = () => {
    
    const movies = useSelector(state => state.movies.list)
    const loading = useSelector(state => state.movies.loading)

    return <>
        <div className={style.movie_list}>
            <div className="container">
                    <SearchMovies />
                    {loading ? <div className="loader">Loading...</div> : <div className={style.movie_list_container}>
                    {movies.length ? movies.map(movie => <Movie key={movie.id} movie={movie} />) : ''}
                </div> }
            </div>
        </div>
    </>
}

export default Index