import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


const Favorite = () => {
      // get data from local storage 
     // parse data  
     const chosenMovie = localStorage.getItem('movies')
     const moviesArr = JSON.parse(chosenMovie) 
     

function removeMovie(id) {
        const deleteMovie = moviesArr.find(movie => movie.id === id)
        // console.log(deleteMovie)
        let arr =[]
     
      
        for (let i = 0; i <= moviesArr.length - 1; i++) {
            if (moviesArr[i].id !== deleteMovie.id) {
                // console.log(moviesArr[i].id)
                // console.log(deleteMovie.id)
                arr.push(moviesArr[i])
                // console.log(moviesArr)
             }
        }  

           localStorage.setItem('movies', JSON.stringify(arr))
           if(arr.length < 1) {
              localStorage.clear();   
            }
    }
    
function deleteAll() {
        localStorage.clear();
    }

     if(!moviesArr) {
        return <p>nothing yet</p>
     }
  
    return (
        <>
        <Container>
        <Row xs={1} md={2} lg={3} xl={4} className='g-4'>
        
        {moviesArr.map((movie,index) => {
            return(
        <Col key={index}>
            <Card className='h-100'  >
                {movie.poster_path && (
               <Card.Img
                variant='top'
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : ''}
                alt={movie.title}
            />
        )}
        <Card.Body>
            {movie.poster_path ? (
                ''
            ) : (
                <Card.Title>No Image Available</Card.Title>
            )}
            <Card.Text className='text-muted'>{movie.title}</Card.Text>
        </Card.Body>

        <Card.Footer>
		   <Button onClick={()=> {removeMovie(movie.id)}} variant='outline-dark'>
					Remove
			</Button>
		</Card.Footer>
    </Card>
                   </Col>
        
            )
        })}
        
        
        </Row>  

        <button onClick={deleteAll}>Delete all</button>   
        </Container>
 
 

        </>
    )
}

export default Favorite;