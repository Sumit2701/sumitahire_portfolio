import{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import '../MovieList/MovieList.css'
export const MovieList=()=>{   
  let {type}=useParams()
  const [movies, setMovies] = useState([]);
  const url=`https://api.themoviedb.org/3/movie/${type}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;
    
  useEffect(() => { 
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
     
  }, );
    return(
      <><h1 className='title'>{type}</h1>
        <div className="movies">
          
        {movies?.map(movie => (
          <MovieCard movie={movie}/>
        ))}
          
        </div></>
    )
}