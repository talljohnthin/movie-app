import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useHistory, Link } from "react-router-dom"
import { getMovieListFromLocalStorage } from "../../modules/actions/favorite/favorite.actions"
import style from './style.module.scss'

const Index = () => {
    const favoriteMovies = useSelector( state => state.favorites.list )
    const [count, setCount] = useState(0)
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMovieListFromLocalStorage())
    }, [dispatch])
    

    useEffect(() => {
        setCount(favoriteMovies?.length)
    }, [favoriteMovies])
    
    return <>
        <div className={style.header}>
            <div className="container">
                <div className={style.header_container}>
                    <div className={style.logo} onClick={() => history.push('/')}>
                        Movies
                    </div>
                    <div className={style.navigation}>
                        <ul>
                            <li><Link to="/favorites">Favorite Movies{count > 0 ? <span className={style.count}>{count}</span> : '' }</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Index