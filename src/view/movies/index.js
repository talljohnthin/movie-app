import React from 'react'
import { motion } from "framer-motion"

import { pageVariants, pageTransition, movieVariants } from "../../modules/transitions"
import style from './style.module.scss'

import { useSelector } from 'react-redux'

import Movie from "./movie"
import SearchMovies from '../search/index'

const Index = () => {
    
    const movies = useSelector(state => state.movies.list)
    const loading = useSelector(state => state.movies.loading)

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
                    <SearchMovies />
                    {loading ? <div className="loader">Loading...</div> : <motion.div initial="hidden" animate="show" variants={movieVariants} className={style.movie_list_container}>
                    {movies.length ? movies.map(movie => <Movie  key={movie.id} movie={movie} />) : ''}
                </motion.div> }
            </div>
        </motion.div>
    </>
}

export default Index