import { Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList/MovieList";
import Navbar from "./components/Navbar/Navbar";
import Fire from './assets/fire.png';
import Star from './assets/glowing-star.png';
import Party from './assets/partying-face.png';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieList type="popular" title="Popular" emoji={Fire} />} />
        <Route path="/top_rated" element={<MovieList type="top_rated" title="Top Rate" emoji={Star} />} />
        <Route path="/upcoming" element={<MovieList type="upcoming" title="Up comming" emoji={Party} />} />
      </Routes>
    </div>
  )
}

export default App;