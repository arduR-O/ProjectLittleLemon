import logo from "../assets/footerLogo.png"

const Footer = () => {
    return (
        <footer>

        <img src={logo} alt="footerLogo" />
        <div className="doormat">
            <h3>Doormat Navigation</h3>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservation">Reservation</a></li>
                <li><a href="/orderOnline">Order Online</a></li>
                <li><a href="/Login">Login</a></li>
            </ul>
        </div>
        <div className="contact">
            <h3>Contact</h3>
            <ul>
                <li><a href="/address">Address</a></li>
                <li><a href="/phone">Phone</a></li>
                <li><a href="/email">Email</a></li>
            </ul>
        </div>
        <div className="socialMedia">
        <h3>Social Media</h3>
            <ul>
                <li><a href="/address">Address</a></li>
                <li><a href="/phone">Phone</a></li>
                <li><a href="/email">Email</a></li>
            </ul>
        </div>
        </footer>
     );
}
 
export default Footer;