//================ Import components ===========
import MovieList from "./MovieList";

//================= Import Types =============
import { MovieData } from "../types/types";

type ResultsProps = {
    searchData: MovieData[];
    setWatchedMovie: React.Dispatch<React.SetStateAction<MovieData[]>>;
};

function results({ searchData, setWatchedMovie }: ResultsProps) {
    const handleClick = (movie: MovieData) => {
        setWatchedMovie((prevMovies) => [...prevMovies, movie]);
    };

    return (
        <MovieList>
            {searchData.map((movie, index) => (
                <li
                    key={index}
                    className='result'
                    onClick={() => handleClick(movie)}
                >
                    <img
                        src={movie.Poster}
                        alt={movie.Title}
                    />

                    <h3>{movie.Title}</h3>
                    <p>🗓️ {movie.Year}</p>
                </li>
            ))}
        </MovieList>
    );
}

export default results;
