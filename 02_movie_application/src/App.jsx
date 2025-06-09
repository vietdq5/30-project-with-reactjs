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
        <Route path="/top_rate" element={<MovieList type="top_rate" title="Top Rate" emoji={Star} />} />
        <Route path="/upcomming" element={<MovieList type="upcomming" title="Up comming" emoji={Party} />} />
      </Routes>
    </div>
  )
}

export default App;