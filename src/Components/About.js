import img1 from "../assets/Mario and Adrian A.jpg"
import img2 from "../assets/Mario and Adrian b.jpg"

const About = () => {
    return (
        <section className="about">
            <div className="content">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>
            <div className="images">
                <img src={img2} alt="logo2" />
                <img src={img1} alt="logo1" />
            </div>
        </section>
    );
}
 
export default About;