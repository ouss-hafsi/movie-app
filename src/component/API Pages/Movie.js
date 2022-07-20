import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'


const Movie =({movie, handleUpdate}) => {

    const [disabled, setDisabled] = useState(false)
    const chosenMovie = localStorage.getItem('movies')
    const moviesArr = JSON.parse(chosenMovie) 
    
    function doubleCheck() {
    if(moviesArr ) {
        const checkMovie = moviesArr.find(movies => movies.id === movie.id) 
        if (checkMovie) {
            return setDisabled(true)
        } else {
            return 
        }
    }

      
      }
useEffect(() => {
    doubleCheck()
},[])
    
    return (
        <>
    <div  className='movies-display' key={movie.id}>
              <div>
                <img className='movies-image' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                <div className='name-rate'>
                <p className='title'>{movie.name}{movie.title}</p>
                <p className='rate'>{movie.vote_average}</p>
                </div>
              
               </div>
             <Link to={`/details/${movie.id}`} >
            <button className='read-more-btn'>Read More</button>
            </Link>
        
            <button disabled={disabled} className='add-fav-btn'  onClick={(id) => {handleUpdate(movie.id)}}>Add to favorite</button>
          
    </div>
        </>
    )
}

export default Movie;