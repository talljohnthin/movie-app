import React, { useEffect } from 'react'
import { motion } from "framer-motion"
import { pageVariants, pageTransition } from "../../modules/transitions"
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
        <motion.div 
            initial="leave" 
            animate="enter" 
            exit="leave" 
            variants={pageVariants} 
            transition={pageTransition}
            className={style.home} 
        >
            <MovieList />
        </motion.div>
    </>
}

export default Index