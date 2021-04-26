import React from 'react'
import Navbar from '../Navbar/Navbar'

const Container = (props) => {
    return (
        <div>
            <style jsx global>{`
            * {
                padding: 0;
                margin: 0;
                transition: 0.2s ease;
              }
              
              body {
                background-image: url("./background.png");
                background-repeat: no-repeat;
                background-attachment: fixed;
                background-size: 180vh;
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
                border-radius: 50%;
                cursor: pointer;
                transition: 0.25s ease;
                position: fixed;
                top: 22px;
                left: 22px;
              }
              
              .hamburger .line {
                width: 21px;
                height: 3px;
                background: #356abc;
                margin: 5px;
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
            `}

            </style>
            <Navbar />
            <div className="container">
              {props.children}
            </div>
        </div>
    )
}

export default Container

