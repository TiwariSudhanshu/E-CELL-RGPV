import "./contact.css"
export default function Contact(){
    return(
        <div className="contact-us">
            <div className="left">
            <i class="fa-solid fa-location-dot"></i> <br />
                <h1>Contact Info</h1>
                <h2>Bhopal</h2>
                <div><i class="fa-regular fa-map"></i>E-Cell RGPV, Gandhi Nagar, Bhopal</div>
                <div><i class="fa-solid fa-phone"></i>+91 96281 28323</div>
                <div><i class="fa-regular fa-envelope"></i>support@ecellrgpv.com</div>
            </div>
            <div className="right">
                <h1>Send us a message</h1>
                <div className="input">
                    <h3>Name</h3>
                    <input type="text" />
                </div>
                <div className="input">
                    <h3>Email</h3>
                    <input type="email" />
                </div>
                <div className="input">
                    <h3>Contact Number</h3>
                    <input type="number" />
                </div>
                <div className="input">
                    <h3>Message</h3>
                    <textarea name="msg-box" id="msg-box" ></textarea>
                </div>
                <button id="bt2">Send Messages</button>
            </div>
        </div>
    )
}