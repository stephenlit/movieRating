//================= import components ===========
import WatchedList from "./WatchedList";

//================= Import Types =============
import { MovieData } from "../types/types";

interface WatchedProps {
    watchedMovie: MovieData[];
}

function Watched({ watchedMovie }: WatchedProps) {
    return (
        <WatchedList>
            {watchedMovie.map((movie, index) => (
                <li
                    key={index}
                    className='result'
                >
                    <img
                        src={movie.Poster}
                        alt={movie.Title}
                    />

                    <h3>{movie.Title}</h3>
                    <p>🗓️ {movie.Year}</p>
                </li>
            ))}
        </WatchedList>
    );
}

export default Watched;
