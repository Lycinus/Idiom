import React from 'react'
import { NavLink } from 'react-router-dom'

const WelcomeBanner = () => (
    <div className="welcome">
        <div>
            <h1>Welcome to Idiom, where words matter.</h1>
            <p>We’ll deliver the best stories and ideas on the topics you care about most straight to your homepage, app, or inbox.</p>
        </div>
        <div className="welcome-banner-button-container">
            <button className="welcome-banner-button"><NavLink to="/signup">Get Started</NavLink></button>
            <button className="welcome-banner-button"><NavLink to="/about">Learn More</NavLink></button>
        </div>
    </div>
)

export default WelcomeBanner