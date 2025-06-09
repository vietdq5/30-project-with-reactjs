
import './MovieList.css';
import MovieCard from './MovieCard.jsx';
import { useState, useEffect } from 'react';
import FilterGroup from './FilterGroup.jsx';
import _ from 'lodash';

const MovieList = ({type, title, emoji}) => {

    const [movies, setMovies] = useState([]);
    const [moviesFilter, setMoviesFilter] = useState([]);
    const [minRate, setMinRate] = useState(0);
    const [sort, setSort] = useState({
        by: 'default',
        order: 'asc'
    });

    useEffect(() => {
        fetchMovies()
    }, [type]);

    useEffect(() => {
        if (sort.by !== 'default') {
            const sortMovies = _.orderBy(moviesFilter, [sort.by], [sort.order]);
            setMoviesFilter(sortMovies);
        }
    }, [sort]);

    const fetchMovies = async () => {
        const reponse = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=b908a76e7077f423fe72890b04a5b486")
            .catch(error => console.error('Error fetching movie data:', error));
        const data = await reponse.json();
        setMovies(data.results);
        setMoviesFilter(data.results);
    }

    const handleFilter = (rating) => {
        if (rating === minRate) {
            setMinRate(0);
            setMoviesFilter(movies);
        } else {
            setMinRate(rating);
            const filteredMovies = movies.filter(movie => movie.vote_average >= rating);
            setMoviesFilter(filteredMovies);
        }
    }

    const handleSort = (e) => {
        const { name, value } = e.target;
        setSort(prevSort => ({
            ...prevSort, [name]: value
        }));
    }

    return (
        <section className="movie_list" id={type}>
            <header className="align_center movie_list_header">
                <h2 className='align_center movie_list_heading'>
                    {title}
                    <img src={emoji} alt="Popular Movies" className='navbar_emoji' />
                </h2>
                <div className="align_center movie_list_fs">
                    <FilterGroup minRate={minRate} handleFilter={handleFilter} rates={[6, 7, 8]} />
                    <select name="by" id="" className="movie_sorting" onChange={handleSort} value={sort.by}>
                        <option value="default">Sort By</option>
                        <option value="release_date">Date</option>
                        <option value="vote_average">Rating</option>
                    </select>
                    <select name="order" id="" className="movie_sorting" onChange={handleSort} value={sort.order}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
            </header>
            <div className="movie_cards">
                {
                    moviesFilter.map((movie) => <MovieCard key={movie.id} movie={movie} />)
                }
            </div>
        </section>
    );
}
export default MovieList;