import { useState, useEffect } from 'react'
import { axiosInstance, API_KEY } from '../../modules/base';
import { useDispatch } from "react-redux"
import useDebounce from './useDebounce';
import { fetchMovies, setMovies } from '../../modules/actions/movie/movie.actions';

const useSearch = () => {
    const dispatch = useDispatch()
    const [isSearching, setIsSearching] = useState(false)
    const [noResult, setNoResult] = useState(false)
    const [term, setTerm] = useState('')
    const debounceTerm = useDebounce(term, 300)

    useEffect(() => {
        if(debounceTerm) {
            try { 
                const searchUser = async() => {
                    const response = await axiosInstance(`/search/movie?api_key=${API_KEY}&query=${debounceTerm}`)
                    if( response.data.results.length ) {
                        setNoResult(false)
                        dispatch(setMovies(response.data.results))
                    } else {
                        setNoResult(true)
                        dispatch(setMovies([]))
                    }
                    setIsSearching(false)
                } 
                searchUser()
            } catch (error) {
                setIsSearching(false)
                setNoResult(false)
                console.log(error)
            }
        } else {
            dispatch(fetchMovies())
            setNoResult(false)
        }
    }, [debounceTerm, dispatch])
    
    return { term, noResult, isSearching, setTerm, setIsSearching }
}

export default useSearch