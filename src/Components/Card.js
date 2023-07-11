const Card = ({image, name, price, desc}) => {
    return (
        <section className="card">
            <img src={image} alt="Dish Image" />
            <div className="title">
                <h2>{name}</h2>
                &nbsp;
                &nbsp;
                &nbsp;
                <p>$ {price}</p>
            </div>
            <p className="mainText">{desc}</p>
            <div className="foot">
                <button>Order a delivery</button>
                <img src={require("../assets/scooter.png")} alt="delivery logo" />
            </div>
        </section>
     );
}
 
export default Card;