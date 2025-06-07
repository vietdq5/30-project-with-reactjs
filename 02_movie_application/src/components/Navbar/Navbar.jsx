import './Navbar.css';
import Fire from '../../assets/fire.png';
import Star from '../../assets/glowing-star.png';
import Party from '../../assets/partying-face.png';
import DarkMode from '../DarkMode/DarkMode.jsx';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Movie film Clone</h1>
            <div className="navbar_links">
                <DarkMode />
                <a href="#popular">Popular <img src={Fire} alt="Popular movie" className='navbar_emoji' /></a>
                <a href="#top_rate">Top Rated <img src={Star} alt="Rop rated movie" className='navbar_emoji' /></a>
                <a href="#upcomming">Upcomming <img src={Party} alt="Upcomming movie" className='navbar_emoji' /></a>
            </div>
        </nav>
    )
}
export default Navbar;