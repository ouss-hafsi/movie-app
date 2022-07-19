import {Link} from 'react-router-dom'


const Movie =({movie, handleUpdate}) => {
    
    
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
        
            <button className='add-fav-btn' onClick={(id) => {handleUpdate(movie.id)}}>Add to favorite</button>
          
    </div>
        </>
    )
}

export default Movie;