
//================= Import Types =============
import { MovieData } from '../types/types';

type ResultsProps = {
    searchData: MovieData[];
};

function results({ searchData }: ResultsProps) {
    return (
        <div className="search-results">
            <h2>Search Results</h2>
            {
                searchData.map((movie, index) => (
                    <div key={index} className="result">
                        <img src={movie.Poster} alt={movie.Title} />
                        <div className="details">
                            <h3>{movie.Title}</h3>
                            <p>{movie.Year}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default results;