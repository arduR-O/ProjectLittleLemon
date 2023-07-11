import Review from './Review'
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"

const Testimonials = () => {
    return (
        <section className="testimonials">
            <h1>Testimonails</h1>
            <div className="reviews">
            <Review rating={4} image={img1} name="Rahul" rext="lorem ipsum gasdf"/>
            <Review rating={5} image={img2} name="Rohan" rext="lorem ipsum gasdf"/>
            <Review rating={4} image={img3} name="Rashmi" rext="lorem ipsum gasdf"/>
            </div>
        </section>
    );
}
 
export default Testimonials;