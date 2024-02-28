import Header from "./components/header"


function App() {

  const [movies, setMovies] = useState<IMovie[]>(data) 

  const addMovie = (newMovie: IMovie) => {
    setMovies((prev) => [...prev, newMovie])
  }

  return (
    <Router>
      <div className="app">
        <div className="container">
          <Header />
          
        </div>
      </div>
    </Router>
  );
    
}

export default App
