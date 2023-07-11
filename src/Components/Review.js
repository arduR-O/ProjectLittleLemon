
const Review = ({rating, image, name, rext }) => {
    const starRating = "⭐️".repeat(rating);
    return ( 
        <section className="review">
            <p>{starRating}</p>
            <div className="imageAndName">
                <img src={image} alt="reviewer's image" />
                <p>{name}</p>
            </div>
            <p>{rext}</p>
        </section>
     );
}
 
export default Review;