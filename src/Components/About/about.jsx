import "./about.css"
export default function About(){
    return(
        <>
        <div className="segment1">
            <div className="seg1-left">
            <h1>On its mission towards building an enterprising India,</h1>
            <p>Provides great opportunities for start-ups, colleges, alumni and
                 corporates to get involved with us.</p>
            <button id="bt2">Get Started<i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <img src="https://i.pinimg.com/736x/ce/e5/f6/cee5f610f4aef1a09df3dea9d7ad1e1b.jpg" alt="photo" />
        </div>
        <div className="segment2">
            <div className="seg2-left">
            <h2>WHO WE ARE</h2>
            <p>The Entrepreneurship Cell of RGPV, also known as E-cell RGPV has
                been established with the vision to inculcate the passion and
                spirit among students to pursue entrepreneurship. We not only
                provide the budding entrepreneurs with a platform to convert
                their dreams into reality but also help them to get insight 
                into the entrepreneurial theory and practice through activities and workshops.</p>
                <button id="bt2">Read More <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <img src="https://i.pinimg.com/736x/a5/45/50/a54550f662ea9743e2fd61b931f2ed80.jpg" alt="photo" />
        </div>
        <div className="segment3">
            <h1 id="seg3-head">What we provide</h1>
            <div className="cards">
            <div className="card" id="c1">
                <h1>Entrepreneurship</h1>
                <p>We organize Workshops and Lectures periodically to create 
                    awareness about entrepreneurship.</p>
            </div>
            <div className="card" id="c2">
                <h1>Student Support</h1>
                <p>Get in touch and contact the best offering incubation 
                    services and centers under cell support.</p>
            </div>
            <div className="card" id="c3">
                <h1>Incubation</h1>
                <p>We organize Workshops and Lectures periodically to create 
                    awareness about entrepreneurship.</p>
            </div>
            <div className="card" id="c4">
                <h1>Mentoring</h1>
                <p>Providing Mentorship through individuals for students launching 
                    their start-up </p>
            </div>
            <div className="card" id="c5">
                <h1>Collaborations</h1>
                <p>We provide students with a traditional office or between
                     members of a virtual team.</p>
            </div>
            </div>
        </div>
        </>
    )
}
