import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar">
                <div class="hamburger">
                    <div class="line line1"></div>
                    <div class="line line2"></div>
                    <div class="line line3"></div>
                </div>
                <Link href="/">
                    <img src="logo.svg" alt="Globant Bootcamp" class="logo" />
                </Link>
            </nav>
        </div>
    )
}

export default Navbar
