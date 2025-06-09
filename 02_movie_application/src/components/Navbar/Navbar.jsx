import './Navbar.css';
import Fire from '../../assets/fire.png';
import Star from '../../assets/glowing-star.png';
import Party from '../../assets/partying-face.png';
import DarkMode from '../DarkMode/DarkMode.jsx';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Movie film Clone</h1>
            <div className="navbar_links">
                <DarkMode />
                <NavLink to="/">Popular <img src={Fire} alt="Popular movie" className='navbar_emoji' /></NavLink>
                <NavLink to="/top_rate">Top Rated <img src={Star} alt="Rop rated movie" className='navbar_emoji' /></NavLink>
                <NavLink to="/upcomming">Upcomming <img src={Party} alt="Upcomming movie" className='navbar_emoji' /></NavLink>
            </div>
        </nav>
    )
}
export default Navbar;