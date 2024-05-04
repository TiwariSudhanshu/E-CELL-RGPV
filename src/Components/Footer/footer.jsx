import "./footer.css"

function Footer(){
    return(
        <div className="footer">
            <div className="description f">
            <img src="./src/assets/logo.png" alt="logo"  id="header-logo"/>
            <p>e-Entrepreneurship Cell is a non-profit organisation solely with
               the purpose of creating awareness towards the developing entrepreneurial
               culture in our surrounding and encourage students to embrace the idea
               of starting their own venture and also to inspire and guide young 
               entrepreneurs and their start-ups.</p>
               <div className="social">
               <i class="fa-brands fa-facebook"></i>
               <i class="fa-brands fa-instagram"></i>
               <i class="fa-brands fa-linkedin"></i>
               </div>
            </div>
            <div className="quick-links f">
                <h3>Quick Links</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Gallery</li>
                    <li>Post Events</li>
                    <li>CAP</li>
                </ul>
            </div>
            <div className="spotlight f">
            <h3>Spotlight</h3>
                <ul className="footer-lists">
                    <li>SIP</li>
                    <li>Startup Incubation</li>
                    <li>E-Mentoring</li>
                    <li>Skill Developement</li>
                    <li>Alumini</li>
                </ul>
            </div>
            <div className="contact f">
                <h3>Contact us</h3>
                <div className="address">E-Cell RGPV, Gandhi Nagar, Bhopal</div>
                <div className="phone">Phone: +91 7828373231</div>
                <div className="email">Email: support@ecellrgpv.com</div>
            </div>
        </div>
    )
}

export default Footer;