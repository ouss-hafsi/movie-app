import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';



import { useState } from 'react';

const MovieDescription = ({movie}) => {


    const urlA = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const [a, setA] = useState(urlA)
    return (
        <>






<Container>
      <Row xs={1} md={2} lg={3} xl={4} className='g-4'>
        <Col>

        <div className=''>
        <Card className='' >
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
    <Card.Text className='text-muted card-1'>{movie.title}</Card.Text>
</Card.Body>

</Card>
        </div>

           </Col>


           

        </Row>
    
    
    </Container>     


  
        </>
    )
}

export default MovieDescription;


