import { NavLink } from 'react-router-dom';

export default function NavBar() {
    const isActive = (path: string) => window.location.pathname === path;

    return (
        <nav className='navbar fixed-top navbar-expand-lg justify-content-end px-5'>
            <NavLink to="/" className={`nav-item nav-link mx-4 ${isActive('/') ? 'active' : ''}`}>Home</NavLink>
            <NavLink to="/recipes" className={`nav-item nav-link mx-4 ${isActive('/recipes') ? 'active' : ''}`}>Recipes</NavLink>
            <NavLink to="/workouts" className={`nav-item nav-link mx-4 ${isActive('/workouts') ? 'active' : ''}`}>Workouts</NavLink>
            <NavLink to="/About" className={`nav-item nav-link mx-4 ${isActive('/about') ? 'active' : ''}`}>About</NavLink>
            <NavLink to="/Contact" className={`nav-item nav-link mx-4 ${isActive('/contact') ? 'active' : ''}`}>Contact</NavLink>
            <NavLink to="/signin" className={`nav-item nav-link me-2 ms-5 ${isActive('/signin') ? 'active' : ''}`}>Sign In</NavLink>
        </nav>
    );
}
