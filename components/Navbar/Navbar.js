import React from 'react'
import Link from 'next/link'

const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar">
                <Link href="/">
                    <img src="logo.svg" alt="Globant Bootcamp" className="logo" />
                </Link>
                <ul className="navbar-links">
                    <Link href="/">
                        <li><a href="" className="navbar-link">Inicio</a></li>
                    </Link>
                    <Link href="/explore">
                        <li><a href="" className="navbar-link">Explorar</a></li>
                    </Link>
                    <Link href="/info">
                        <li><a href="" className="navbar-link">Informacion</a></li>
                    </Link>              
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
