// import logo from './logo.svg';
import './App.css';
import './App-Responsive.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import { useEffect, useState } from 'react';


   // import pages
import Navigation from './component//Pages & nav/Navigation';
import Home from './component//Pages & nav/Home';
import About from './component//Pages & nav/About';
import Contact from './component/Pages & nav/Contact';
import DisplayMovies from './component/API Pages/DisplayMovies';
import MovieDetails from './component/API Pages/MovieDetails';
import Favorite from './component/API Pages/Favorite';



function App() {
  const [movies, setMovies] = useState([])


  return (
    <>
    <header>
       <Navigation/>
    </header>
    <main>
      <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Movies' element={<DisplayMovies movies={movies} setMovies={setMovies} />}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/details/:id' element={<MovieDetails movies={movies}/>}/>
    <Route path='/favorite' element={<Favorite/>}/>

      </Routes>
    </main>
    </>
  );
}

export default App;
