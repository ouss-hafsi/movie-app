


const Favorite = () => {


     // get data from local storage 
     // parse data  
     const chosenMovie = localStorage.getItem('movies')
     const moviesArr = JSON.parse(chosenMovie) 

     if(!moviesArr) {
        return <p>nothing yet</p>
     }
  
    return (
        <>
        {moviesArr.map((movie,index) => {
            return(
            <div key={index}>
             {movie ? <p>{movie.title}</p>: <p>Loading</p>}
                </div>
            )
        })}
 

        </>
    )
}

export default Favorite;