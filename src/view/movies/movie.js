import React from 'react'
import { imageBaseURL } from "../../modules/base"
import { Link } from 'react-router-dom'
import style from './style.module.scss'
import NoImage from "../../assets/images/no-image.jpg"

const Index = ({ movie }) => {

    const { id, title, poster_path } = movie
    const imagePath =  imageBaseURL + '/w500' + poster_path
    

    return <>
        <div className={style.movie}>
            <div className={style.movieContainer}>
                <div className={ style.img_wrapper }>
                    <img src={ poster_path === null ? NoImage : imagePath } alt={title}/>
                    <Link
                        className={style.button}
                        to={{
                            pathname: `/movie/${id}`,
                            movieID: id,
                        }}
                        >
                        <span>View</span>
                    </Link>
                </div>
                <span className={ style.title }>{ title }</span>
            </div>
        </div>
    </>
}

export default Index