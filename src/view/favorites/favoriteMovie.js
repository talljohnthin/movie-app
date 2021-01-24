import React from 'react'
import { useDispatch } from 'react-redux'
import { imageBaseURL } from "../../modules/base"
import { Link } from 'react-router-dom'
import { useLocalStorage } from '../movies/useLocalStorage'
import NoImage from "../../assets/images/no-image.jpg"
import style from './style.module.scss'
import { getMovieListFromLocalStorage } from '../../modules/actions/favorite/favorite.actions'

const Index = ({ movie }) => {
    const dispatch = useDispatch()
    const { id, title, poster_path } = movie
    const imagePath =  imageBaseURL + '/w500' + poster_path

    const { removeToFavorite } = useLocalStorage()

    const handleRemoveToLocalStorage = () => {
        removeToFavorite(id)
        dispatch(getMovieListFromLocalStorage())
    }

    return <>
        <div className={style.movie}>
            <div className={style.movieContainer}>
                <div className={ style.img_wrapper }>
                    <img src={ poster_path === null ? NoImage : imagePath } alt={title}/>
                    <div className={style.option}>
                        <Link
                            className={style.button}
                            to={{
                                pathname: `/movie/${id}`,
                                movieID: id,
                            }}
                            >
                            <span>View</span>
                        </Link>
                        <button className={style.buttonRemove} onClick={handleRemoveToLocalStorage}><span>Remove</span></button>
                    </div>
                </div>
                <span className={ style.title }>{ title }</span>
            </div>
        </div>
    </>
}

export default Index