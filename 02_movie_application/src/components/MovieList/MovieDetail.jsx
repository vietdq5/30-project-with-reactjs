import './MovieDetail.css';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
    const { movieId } = useParams();
    return (
        <div className="movie_detail">
            <h2>Movie Detail {movieId}</h2>
        </div>
    );
}

export default MovieDetail;