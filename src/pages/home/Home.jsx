import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import './Home.css';
import { MovieCard } from "../../components/MovieCard/MovieCard";
export const Home = () => {
  const [popular, setpopular] = useState([]);
  const popUrl =
    "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US";
  useEffect(() => {
    fetch(popUrl)
      .then((res) => res.json())
      .then((data) => setpopular(data.results));
   }, []);

  return (
    <div className="home">
      <Carousel
        showThumbs={false}
        transitionTime={3}
        showStatus={false}
        showIndicators={false}
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
      >
        {popular.map((movie) => (
          <>
            <Link to={`/movie/${movie.id}`} style={{color:"white",textDecoration:"none"}}>
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                  alt="movie poster"
                />
              </div>

              <div className="posterImage_overlay">
                <div className="posterImage_title"> {movie.title}</div>
                <div className="posterImage_runtime">
                {movie?movie.release_date:""}
                    <span className="posterImage_rating">
                        {movie?movie.vote_average:""}
                        <i className="fa fa-star"></i>

                        </span>
                    </div>
                    <div className="posterImage_description">{movie? movie.overview :""}</div>
              </div>
            </Link>
          </>
        ))}
      </Carousel>
      <div className="movies">
     
      {popular?.map(movie => (
          <MovieCard movie={movie}/>
        ))}
    </div>
    </div>
  );
};
