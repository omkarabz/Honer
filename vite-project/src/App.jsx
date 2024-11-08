import Card from "./Card";

function App() {
  console.log("hi");

  return (
    <div className="container">
      <Card
        imgLink="https://bst.icons8.com/wp-content/uploads/2024/05/illustration_generator.webp"
        name="Icons8"
        description="This is a cool website"
        buttonText="Know more"
      />
      <Card
        imgLink="https://goodies.icons8.com/web/landings/promo/promo-mega-creator.webp"
        name="Illustration"
        description="Some random text"
        buttonText="React"
      />
      <Card description="hey there" action={() => alert("Yeah")} />
    </div>
  );
}

export default App;