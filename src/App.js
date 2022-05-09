import logo from "./logo.svg";

import AllBeers from "./components/AllBeers";
import Home from "./components/Home";
import RandomBeer from "./components/RandomBeer";
import BeerDetails from "./components/BeerDetails";
import NewBeer from "./components/NewBeer";

import "./App.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";

function App() {
  let { pathname } = useLocation();

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/beers">All Beers</Link>
      <Link to="/random-beer">Get Random Beers</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/beers/:id" element={<BeerDetails />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
