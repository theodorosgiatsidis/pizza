import React from "react";
import Featured from "../../components/featured/Featured";
import NewsLetter from "../../components/newsletter/NewsLetter";
import PizzaList from "../../components/pizzaList/PizzaList";

function Home() {
  return (
    <div className="home">
      <Featured />
      <PizzaList />
    </div>
  );
}

export default Home;
