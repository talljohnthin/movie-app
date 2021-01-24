import React, { useEffect } from 'react'
import style from './style.module.scss'

import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../../modules/actions/movie/movie.actions'

import MovieList from '../movies'

const Index = () => {
    const dispatch = useDispatch()
    const movies = useSelector( state => state.movies.list )

    useEffect(()=> {
        if(!movies.length) {
            dispatch(fetchMovies())
        }
    },[dispatch, movies])
    
    return <>
        <div className={style.home}>
            <MovieList />
        </div>
    </>
}

export default Index