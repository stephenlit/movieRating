//=============== Import hooks ================
import { useState, useEffect } from "react";

//============== Import components ============
import NavBar from "./components/NavBar";
import Results from "./components/Results";
import Watched from "./components/Watched";
import Box from "./components/Box";
// ================ import movieData.js ================
// anotherFile.js
// import { tempMovieData, tempWatchedData } from "./data/movieData";
import { MovieData } from "./types/types";

function App() {
    const [searchData, setSearchData] = useState<MovieData[]>([]);
    const [watchedMovie, setWatchedMovie] = useState<MovieData[]>([]);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        const fetchFilteredData = async () => {
            if (!searchInput || searchInput.length < 4) {
                setSearchData([]);
                return;
            }

            try {
                const response = await fetch(
                    `https://www.omdbapi.com/?apikey=b717c2e0&&s=${encodeURIComponent(
                        searchInput
                    )}&page=1&plot=full`
                );
                if (!response.ok) {
                    throw new Error("Error: ${response.statusText}");
                }
                const data = await response.json();
                setSearchData(data.Search || []);
            } catch (error) {
                console.error("Failed to fretch data:", error);
                setSearchData([]);
            }
        };
        fetchFilteredData();
    }, [searchInput]);

    return (
        <div className='app'>
            <NavBar>
                <div className='navbar'>
                    <h2>My App</h2>
                    <input
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        type='text'
                        placeholder='Search...'
                        size={40}
                    />
                    <p>Top 10 results</p>
                </div>
            </NavBar>
            <main>
                <Box>
                    <Results
                        searchData={searchData}
                        setWatchedMovie={setWatchedMovie}
                    />
                </Box>
                <Box>
                    <Watched watchedMovie={watchedMovie} />
                </Box>
            </main>
        </div>
    );
}

export default App;
