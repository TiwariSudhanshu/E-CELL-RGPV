import { Link } from "react-router-dom";
import "./header.css";

function Header(){
    return(
        <div className="header">
        <img src="https://i.pinimg.com/736x/a8/70/39/a870394b536624b6573be8f34205a78a.jpg" alt="logo"  id="header-logo"/>
        
        <div className="navigations">
            <ul className="nav-list">
                <li>
                    <Link to= "/" style={{textDecoration: "none"}}>
                    Home
                    </Link>
                </li>
                <li>
                    <Link to= "/about" style={{textDecoration: "none"}}>
                    About                   
                    </Link>
                </li>
                <li>
                    <Link to="/team" style={{textDecoration: "none"}}>
                    Team
                    </Link>
                    </li>
                <li>
                    <Link to="/contact" style={{textDecoration: "none"}}>
                    Contact
                    </Link>
                    </li>
            </ul>
            <button id="bt2">Registration</button>
        </div>
        </div>
    )
}

export default Header;
