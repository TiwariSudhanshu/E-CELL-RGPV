import React from 'react';
import "./home.css"
import { useEffect } from 'react';
function Home(){
    return(
        <>
        <div className='banner h'> 
        {/* To display the first segment of home page */}
            <img src="https://i.pinimg.com/736x/a8/70/39/a870394b536624b6573be8f34205a78a.jpg" alt="logo" id='logo' />
            <div className="banner-text">
                <h1>An RGPV Initiative</h1>
                <p>working to <span>provide internship</span></p>
                <button id='bt1'>E-VOLVE: E-CELL ANNUAL MAGAZINE</button>
            </div>
        </div>
        <div className='vision h'>
            {/* Segment for vision section */}
            <div className="heading-vision">
            <h1>Our Vision</h1>
            <img src="https://i.pinimg.com/736x/e1/1d/a1/e11da134d83ef79eb0b88c14637afc26.jpg" alt="vision" id='vision-logo'/>
            </div>
            <div className="content-vision">
                e-Entrepreneurship Cell, RGPV is a non-profit organization that believes entrepreneurship
                is pivotal for our country's development. It was established with the purpose of creating, 
                fostering, and promoting the spirit of developing a culture of entrepreneurship in our surroundings.
                The team here works to encourage students to embrace the idea of starting their venture and dispel
                the fear of starting a startup. We guide young entrepreneurs and technopreneurs in their journey 
                from campus to incubators and support them in transforming their budding ideas into successful startups
            </div>
        </div>
        <div className="belief h">
            <h1>WE BELIEVE IN 3 Is</h1>
            <div className="is">
                <div className="i">
                <i class="fa-solid fa-magnifying-glass"></i>
                <h2>Identity</h2>
                </div>
                <div className="i">
                <i class="fa-regular fa-lightbulb"></i>
                <h2>Innovate</h2>
                </div>
                <div className="i">
                <i class="fa-solid fa-gear"></i>
                <h2>Incubate</h2>
                </div>
            </div>
        </div>
        <div className="initiatives h">
            <h1>INITIATIVES</h1>
            <p>To fulfill our vision to build an ecosystem where networking and 
                entrepreneurial mindset are encouraged, we have conceptualized and
                 are successfully running the following initiatives to help future
                  entrepreneurs in their entrepreneurial journey.</p>
        </div>
        </>
    )
}

export default Home
