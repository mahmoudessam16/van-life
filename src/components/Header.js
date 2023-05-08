import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    const styles = {
        fotnWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink to="/host" style={({isActive}) => isActive ? styles : null}>Host</NavLink>
                <NavLink to="/about" style={({isActive}) => isActive ? styles : null}>About</NavLink>
                <NavLink to="/vans" style={({isActive}) => isActive ? styles : null}>Vans</NavLink>
            </nav>
        </header>
    )
}

export default Header
