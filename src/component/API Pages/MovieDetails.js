
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Movie from './Movie';
import MovieDescription from './MovieDescription';

const MovieDetails = () => { 
 const [movieDetails,setMovieDetails] = useState()   
 const {id} = useParams()


//  const findMovie = movies.filter(movie => movie.id === id)
//  console.log(findMovie)

const getMovie = {
    key: process.env.REACT_APP_KEY,
    // limit: 10,
    // rating: 'G',
    api: 'https://api.themoviedb.org/3/',
    endpoint: 'movie/'
  };

function getDetails() {
    const url =`${getMovie.api}${getMovie.endpoint}${id}?api_key=${getMovie.key}&language=en-US`

    fetch(url)
      .then(response => response.json())
      .then(data => {
     
  
        setMovieDetails(data)
      
    })
      .catch(console.error);
   
}

useEffect(() =>{
    getDetails()
},[]) 



    return (
        <>
<p>this MovieDetails</p>
{/* {movieDetails ? <Movie movie={movieDetails} /> : <p>Loading</p>} */}
{movieDetails ? <MovieDescription movie={movieDetails} /> : <p>Loading</p>}

        </>
    )
}

export default MovieDetails;