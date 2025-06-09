import { NavLink } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {

    return (
        <nav className="narbar_list">
            <li>
                <NavLink to='/' className='nav_link'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/products' className='nav_link'>Products</NavLink>
            </li>
            <li>
                <NavLink to='/articles' className='nav_link'>Articles</NavLink>
            </li>
            <li>
                <NavLink to='/admin' className='nav_link'>Admin</NavLink>
            </li>
        </nav>
    );
}

export default Navbar;