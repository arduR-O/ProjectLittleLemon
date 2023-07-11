import image from "../assets/restauranfood.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Hero = () => {
  return (
    <section className="hero">

        <div className="content">
          <h1>Little Lemon</h1>
          <br />
          <h2>Chicago</h2>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            voluptatem sit aliquam quaerat cum. Laborum dolore
          </p>
          <button aria-label="On Click"><Link to="/form">Reserve a Table</Link></button>
        </div>

      <img src={image} alt="heroImage" />
      <div className="forColor2"></div>
    </section>
  );
};

export default Hero;
