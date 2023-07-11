import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Logo from "../assets/Logo.svg"

const Header = () => {
    return ( 
        <header>
            <img src={Logo} alt="logo" />
            <ul>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/menu">Menu</a>
                <Link to="/form" aria-label="On Click">Reservations</Link>
                <a href="/orderOnline">Order Online</a>
                <a href="/login">Login</a>
            </ul>
        </header>
     );
}
 
export default Header;