import Movie from "../component/movieInfo";
import styles from "../App.module.css";
import { useState, useEffect } from "react";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
  
   
  
    const getMovies = async () => {
      const json = await (
        await fetch(
          'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
          ).json();
    
      setMovies(json.data.movies); 
      setLoading(false);
    };
    
    useEffect(() =>{
      getMovies();
    },[]);
    
    return (
      <div>
        {loading ? <h1 className={styles.title}>The Movie Tracker</h1> :<h1 className={styles.title}>The Movie Tracker({movies.length})</h1>}
        {loading ? <strong>Loading..</strong> : null }
        
        {movies.map((movie)=>
          <Movie
          key={movie.key}
          coverIMG={movie.medium_cover_image}
          title ={movie.title}
          year = {movie.year}
          summary = {movie.summary}
          genres = {movie.genres}/>)}
            
  
    
      </div>
      
    )
      
}

export default Home;