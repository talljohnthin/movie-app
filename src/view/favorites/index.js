import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import style from './style.module.scss'

import FavoriteMovie from "./favoriteMovie"
import { getMovieListFromLocalStorage } from "../../modules/actions/favorite/favorite.actions"

const Index = () => {
    const favorites = useSelector(state => state.favorites.list)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMovieListFromLocalStorage())
    }, [dispatch])

    return <>
        <div className={style.movie_list}>
            <div className="container">
                { favorites.length ? 
                    <div className={style.label}>Your <span>Favorite Movies</span></div> : 
                    <div className={style.label}>No <span>Favorite Movies</span></div>
                }
                <div className={style.movie_list_container}>
                    {favorites.length ? favorites.map(movie => <FavoriteMovie key={movie.id} movie={movie} />) : ''}
                </div>
            </div>
        </div>
    </>
}

export default Index