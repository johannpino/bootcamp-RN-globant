import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import Hamburger from '../Hamburger/Hamburger'
import { useState } from 'react'

const Container = (props) => {

const [navState, setNavState] = useState(false)

const handleHamburger = () => {
  console.log('hola')
}

    return (
        <div>
            <style jsx global>{`
            * {
                padding: 0;
                margin: 0;
                transition: 0.2s ease;
              }
              
              body {
                background: url(background.png) no-repeat center center fixed; 
                -webkit-background-size: cover;
                -moz-background-size: cover;
                -o-background-size: cover;
                background-size: cover;
              }
              
              .navbar {
                background: white;
                display: flex;
                height: 72px;
                width: 100%;
                position: fixed;
                top: 0;
                z-index: 1;
                min-width: 220px;
                -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.4);
                -moz-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.4);
                box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.4);
              }
              
              .hamburger {
                height: 32px;
                width: 31px;
                cursor: pointer;
                transition: 0.25s ease;
                position: fixed;
                z-index: 10;
                top: 18px;
                left: 18px;
                padding: 5px;
              }
              
              .hamburger .line {
                width: 21px;
                height: 3px;
                background: #356abc;
                margin: 5px;
              }

              .line-1 {
                transform: rotate(-45deg) translate(-5px, 6px);
              }
              .line-2 {
                opacity: 0;
              }
              .line-3 {
                transform: rotate(45deg) translate(-5px, -6px);
              }
              
              .logo {
                height: 62px;
                position: absolute;
                left: 50%;
                top: 6px;
                transform: translateX(-50%);
                cursor: pointer;
              }
              
              .container {
                width: 90%;
                max-width: 690px;
                height: 80vh;
                margin: 120px auto 60px auto;
                font-family: "Minecraft";
              }

              .sidebar-div {
                position: fixed;
                top: 0;
                left: 0;
                height: 100%;
                width: 0;
                z-index: 2;
                background-color: white;
                transition: 0.2s ease;
              }
              
              .sidebar-div-active {
                width: 75%;
              }
              
              .sidebar-links {
                display: none;
                flex-direction: column;
                padding: 8rem 48px;
                margin: auto;
                text-align: center;
                opacity: 0%:
                transition: 0.2s ease;
              }

              .sidebar-links-active {
                display: flex;
                opacity: 100%;
              }
              
              .sidebar-link {
                font-family: "Roboto", sans-serif;
                font-size: 28px;
                font-weight: medium;
                text-decoration: none;
                margin: 24px 0;
                color: #356abc;
              }
              .navbar-links {
                position: fixed;
                left: 75%;
                top: 26px;
                transform: translateX(-50%);
                cursor: pointer;
                list-style: none;
                display: none;
              }
              .navbar-link {
                text-decoration: none;
                font-size: 18px;
                font-weight: medium;
                margin: 0 12px;
                font-family: "Roboto", sans-serif;
                color: #356abc;
              }
              @media screen and (min-width: 720px) {
                .sidebar-div-active {
                  width: 60%;
                }
              }
              
              @media screen and (min-width: 1024px) {
                .sidebar-div-active {
                  display: none;
                }
                .hamburger {
                  display: none;
                }
                .logo {
                  left: 25%;
                }
                .navbar-links {
                  display: flex;
                }
              }
            `}

            </style>
            <div className="hamburger" onClick={() => setNavState(!navState)}>
              <div className={navState ? "line line-1" : "line"}></div>
              <div className={navState ? "line line-2" : "line"}></div>
              <div className={navState ? "line line-3" : "line"}></div>
             </div>
            <Navbar isActive={navState}/>
            <Sidebar isActive={navState}/>
            <div className="container">
              {props.children}
            </div>
        </div>
    )
}

export default Container

