import React from "react";
import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";
import HomePageCard from "./HomePageCard";

const Home = () => {
  return (
    <div>
      <HomePageCard image={beers} title="All Beers" route="/all-beers" />
      <HomePageCard image={newBeer} title="Random Beer" route="/random-beer" />
      <HomePageCard image={randomBeer} title="New Beer" route="/new-beer" />
    </div>
  );
};

export default Home;
