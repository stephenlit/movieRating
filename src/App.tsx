//=============== Import hooks ================
import { useState, useEffect } from 'react'


//============== Import components ============
import NavBar from "./components/NavBar"
import Results from './components/Results'
import WatchedList from './components/WatchedList'


// ================ import movieData.js ================
// anotherFile.js
import { tempMovieData, tempWatchedData } from './data/movieData';
import { MovieData } from './types/types';





function App() {
  const [searchData, setSearchData] = useState<MovieData[]>(tempMovieData);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const filteredData = tempMovieData.filter(movie => movie.Title.toLowerCase().includes(searchInput.toLowerCase()));
    setSearchData(filteredData);
  }, [searchInput]);

  return (
    <div className="app">
      <NavBar>
        <div className="navbar">
          <h2>My App</h2>
          <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} type="text" placeholder="Search..." size={40} />
          <p>Top 9 results</p>
        </div>
      </NavBar>
      <div className="container">
        <Results searchData={searchData} />
        <WatchedList tempWatchedData={tempWatchedData} />
      </div>
    </div>
  )
}

export default App
