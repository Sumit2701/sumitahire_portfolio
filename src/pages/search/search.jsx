import{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import './search.css'
export const Search=()=>{   
  let {search}=useParams()
  const [movies, setMovies] = useState([]);
  const url=`https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&query=${search}&language=en-US`;
    
  useEffect(() => { 
    console.log(url)
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
     
  }, );
    return(
      <><h1 className='title'>Search</h1>
        <div className="movies">
          
        {movies?.map(movie => (
          <MovieCard movie={movie}/>
        ))}
          
        </div></>
    )
}