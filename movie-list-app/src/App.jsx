import { useState, useEffect } from 'react';
import './App.scss';
import MovieItem from './MovieItem.jsx';
import TopSection from './TopSection.jsx';

const emptyMovie = [
  {title: "", rating: 0},
]

const MovieList = () => {

  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState(emptyMovie);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/isaksandquist/MovieData/main/movies')
    .then((response) => response.json())
    .then((data) => setMovies(data))
    .catch((error) => {
      console.error('det uppstod ett fel: ' + error);
    });
  }, []);

  const addMovie = (e) => {
    e.preventDefault();

    if (!newMovie.title) {
      alert("You must fill in the movie title")
    } else if (!newMovie.rating || newMovie.rating > 10 || newMovie.rating.length > 3) {
      alert("You must rate the movie between 0-10")
    } else {
      setMovies([
        ...movies, newMovie
      ]);
      setNewMovie(emptyMovie);
    }
  };
  
    return (
      <>
      <div className="form-section">
          <form onSubmit={addMovie}>
            <input type="text" placeholder="Movie name..." value={newMovie.title || ""} onChange={(e) => setNewMovie({...newMovie, title: e.target.value})}/>
            <input type="number" min="0" max="10" step="0.1" placeholder="Rating" value={newMovie.rating || ""} onChange={(e) => setNewMovie({...newMovie, rating: e.target.value})}/>
            <button type="submit">
              Add
            </button>
          </form>
        </div>
        <table className="main-section">
          <tbody>
            {
            movies.sort((a, b) => a.rating < b.rating ? 1 : -1)
            .map((m, index) => (
              <MovieItem key={index}
                title={m.title}
                rating={m.rating}
                />
            ))}
          </tbody>
        </table>
      </>
    );
  };

function App() {

  return (
    <>
      <TopSection/>
      <MovieList />
    </>
  )
}

export default App
