import { NavLink } from 'react-router-dom';

export default function Header() {
    
    return (
        <header>
            <h1>Eric Lindstrom</h1>

            <nav>
                <NavLink to="/" className={({ isActive }) => isActive ? 'nav nav-link-active' : 'nav nav-link'}>About Me</NavLink>
                <NavLink to="/Portfolio" className={({ isActive }) => isActive ? 'nav nav-link-active' : 'nav nav-link'}>Portfolio</NavLink>
                <NavLink to="/Contact" className={({ isActive }) => isActive ? 'nav nav-link-active' : 'nav nav-link'}>Contact</NavLink>
                <NavLink to="/Resume" className={({ isActive }) => isActive ? 'nav nav-link-active' : 'nav nav-link'}>Resume</NavLink>
            </nav>
        </header>
    )
}