import Card from './Card'
import greekSaladImage from '../assets/greekSalad.jpg';
import bruchettaImage from '../assets/bruchetta.svg';
import lemonDessertImage from '../assets/lemonDessert.jpg';

//I wanted to pass image into the card component since I can not hardcode it, first I tried passing the path "../assets/img" as a prop and then using require in the component (i used require since I did not know how importing individually in component would work) but turns out that require can not take dynamic values, it needs string literals
//so the way to do it is to import all the images in the parent component and pass them on like props like I have done

const Specials = () => {
    return (
        <section className="specials">
            <div className="title">
                <h1>Specials</h1>
                <button>Menu</button>
            </div>
            <div className="cardContainer">
                <Card image={greekSaladImage} name="Greek Salad" price="12.99" desc="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "/>
                <Card image={bruchettaImage} name="Bruchetta" price="5.99" desc="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."/>
                <Card image={lemonDessertImage} name="Lemon Dessert" price="5.00" desc="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."/>
                </div>
        </section>
    );
}
 
export default Specials;