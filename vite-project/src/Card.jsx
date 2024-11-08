function Card({
    imgLink = "https://placehold.co/200",
    name = "Card",
    description = "This is the description",
    buttonText = "Click Me",
    action = () => console.log("Clicked"),
  }) {
    const heading = {
      color: "red",
      fontWeight: "bold",
    };
  
    return (
      <div className="card">
        <img src={imgLink} />
        <h2 style={heading}>{name}</h2>
        <p style={{ color: "orange" }}>{description}</p>
  
        <button onClick={action}>{buttonText}</button>
      </div>
    );
  }
  
  export default Card;