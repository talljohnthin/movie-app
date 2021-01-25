import React, { useEffect } from 'react'
import { motion } from "framer-motion"
import { useSelector, useDispatch } from "react-redux"
import { pageVariants, pageTransition, movieVariants } from "../../modules/transitions"
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
        <motion.div 
            initial="leave" 
            animate="enter" 
            exit="leave" 
            variants={pageVariants} 
            transition={pageTransition}
            className={style.movie_list}
        >
            <div className="container">
                { favorites.length ? 
                    <div className={style.label}>Your <span>Favorite Movies</span></div> : 
                    <div className={style.label}>No <span>Favorite Movies</span></div>
                }
                <motion.div initial="hidden" animate="show" variants={movieVariants} className={style.movie_list_container}>
                    {favorites.length ? favorites.map(movie => <FavoriteMovie key={movie.id} movie={movie} />) : ''}
                </motion.div>
            </div>
        </motion.div>
    </>
}

export default Index