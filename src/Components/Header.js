import Logo from "../assets/Logo.svg"

const Header = () => {
    return ( 
        <header>
            <img src={Logo} alt="logo" />
            <ul>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/menu">Menu</a>
                <a href="/reservations">Reservations</a>
                <a href="/orderOnline">Order Online</a>
                <a href="/login">Login</a>
            </ul>
        </header>
     );
}
 
export default Header;