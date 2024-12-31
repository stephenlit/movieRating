//=============== Import hooks ================
import { useState } from 'react'


//============== Import componets ============
import NavBar from "./components/NavBar"
import Results from './components/Results'
import WatchedList from './components/WatchedList'


// ================ import movieData.js ================
// anotherFile.js
import { tempMovieData, tempWatchedData } from './data/movieData';



function App() {
  const [searchData, setSearchData] = useState(null);
  const [searchInput, setSearchInput] = useState('');

  console.log(searchInput);

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
        <Results />
        <WatchedList />
      </div>
    </div>
  )
}

export default App
