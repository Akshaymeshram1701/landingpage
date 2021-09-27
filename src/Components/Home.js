import React, { useState } from 'react'
import './Home.css'
import sea from '../sea.mp4'

function Home() {
    const[isOpen, setOpen] = useState(false)
    return (
        <div className="main">
            <header>
                <h2 className="logo-text">Travel</h2>
                {/* <i className="fas fa-bars menu-icon" onClick={() => setOpen(!isOpen)}></i> */}
                <i className={`menu-icon ${isOpen ? "fas fa-times move" : "fas fa-bars"}`} onClick={() => setOpen(!isOpen)}></i>
            </header>
            <div className="text">
                <h2 className="heading-text">Adventure Awaits</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consequatur neque mollitia unde similique iusto, quo odit aliquid quos non.</p>
            </div>
            <button className="btn-explore">Explore</button>

            <video src={sea} controls={false} autoPlay loop muted></video>
            <ul className="social-icons">
                <li>
                    <i className="fab fa-facebook-f"></i>
                </li>

                <li>
                    <i className="fab fa-instagram"></i>
                </li>

                <li>
                    <i className="fab fa-twitter"></i>
                </li>
            </ul>
            <div className={`menu ${isOpen ? "active" : ""}`}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Review</li>
                    <li>Plan Travel</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Home
