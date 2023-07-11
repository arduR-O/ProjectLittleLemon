import {useState} from 'react'
const Review = ({rating, image, name, rext }) => {
    return ( 
        <section className="review">
            <p>{"&#11088;".repeat(rating)}</p>
            <div className="imageAndName">
                <img src={image} alt="reviewer's image" />
                <p>{name}</p>
            </div>
            <p>{rext}</p>
        </section>
     );
}
 
export default Review;