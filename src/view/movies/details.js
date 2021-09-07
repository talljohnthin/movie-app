import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { imageBaseURL } from "../../modules/base"
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, Redirect } from 'react-router-dom'
import { useLocalStorage } from "./useLocalStorage"

import { pageVariants, pageTransition } from "../../modules/transitions"
import style from './style.module.scss'

import { fetchMovie } from '../../modules/actions/movie/movie.actions'
import { getMovieListFromLocalStorage } from '../../modules/actions/favorite/favorite.actions'

const Index = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const [ isFavorated, setIsFavorated] = useState(false)
    const localStorageMovieList = useSelector( state => state.favorites.list)
    const movie = useSelector( state => state.movies.movie)

    const { removeToFavorite, addToFavorite } = useLocalStorage()

    const imagePath =  imageBaseURL + '/original' + movie?.poster_path

    useEffect(() => {
        dispatch(fetchMovie(location.movieID))
    }, [dispatch, location])

    useEffect(() => {
        dispatch(getMovieListFromLocalStorage())
    }, [dispatch])

    useEffect(() => {
        setIsFavorated(false)
        if(localStorageMovieList) {
          const foundMovieIndex = localStorageMovieList.findIndex(storageMovie => storageMovie.id === movie?.id)
          if(foundMovieIndex !== -1) {
            setIsFavorated(true)
          }
        } 
    }, [movie, localStorageMovieList,  dispatch])

    useEffect(() => {
        window.fbq('track', 'ViewContent', { 
            content_type: 'product',
            content_ids: location.movieID,
            content_name: movie.title,
            content_category: 'Movie',
            value: 0.50,
            currency: 'USD'
        });
      // eslint-disable-next-line
    },[])

    if(location.movieID === undefined) {
        return <Redirect to="/" />
    }

    const handleRemoveToFavorites = () => {
        removeToFavorite(movie.id)
        setIsFavorated(false)
        dispatch(getMovieListFromLocalStorage())
    }

    const handleAddToFavorites = () => {
        addToFavorite(movie)
        setIsFavorated(true)
        dispatch(getMovieListFromLocalStorage())
    }
    

    return <>
        <motion.div 
            initial="leave" 
            animate="enter" 
            exit="leave" 
            variants={pageVariants} 
            transition={pageTransition} 
            className={style.details}
        >
            <div className={style.banner} style={{ backgroundImage: `url(${ imagePath })` }}></div>
            <div className={style.container}>
                <div className={style.title}>{movie.title}<span></span></div>
                <img className={style.img} src={ imagePath } alt={movie.title}/>
                <div className={style.buttonWrapper}>
                    { isFavorated ? 
                        <button className={style.buttonUnFavorite} onClick={ handleRemoveToFavorites }><span>Unfavorite this movie</span></button> :
                        <button className={style.button} onClick={ handleAddToFavorites }><span>Favorite this movie</span></button>
                    }
                </div>
                <div className={style.info}>
                    <ul>
                        <li>
                            Release Date
                            <span>{movie.release_date}</span>
                        </li>
                        <li>
                            Vote Count
                            <span>{movie.vote_count}</span>
                        </li>
                        <li>
                            Status
                            <span>{movie.status}</span>
                        </li>
                    </ul>
                </div>
                <div className={style.description}>
                   {movie.tagline}
                </div>
                <div className={style.more}>
                    <div className={style.box1}>
                        <div className={style.box_label}>Genres</div>
                        <ul>
                            {movie.genres?.map((genre, index) => <li key={index}>{genre.name}</li>)}
                        </ul>
                    </div>
                    <div className={style.box2}>
                    <div className={style.box_label}>Overview</div>
                        {movie.overview}
                    </div>
                </div>
            </div> 
        </motion.div>
    </>
}

export default Index