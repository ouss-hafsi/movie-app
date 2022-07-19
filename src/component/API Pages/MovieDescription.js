



const MovieDescription = ({movie}) => {
    return (
        <>
            <div  className='movie-description'>
              
              <img  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                <div className="movie-d">

                <p className="description-title">{movie.name}{movie.title}</p>
                <p><strong>Rate:</strong> {movie.vote_average}</p>
                <p><strong>Release Date:</strong> {movie.release_date}</p>
                <p><strong>Description:</strong>{movie.overview}</p>
                </div>

            
           </div>
        </>
    )
}

export default MovieDescription;