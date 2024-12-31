import NavBar from "./components/NavBar"
import Results from './components/Results'
import WatchedList from './components/WatchedList'


function App() {

  return (
    <div className="app">
      <NavBar />
      <div className="container">
        <Results />
        <WatchedList />
      </div>
    </div>
  )
}

export default App
