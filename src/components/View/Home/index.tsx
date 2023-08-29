import React from "react";
import Hero from "./hero";
import Innovation from "./innovation";
import Article from "./articles";
import Experience from "./experience";
import Explore from "./explore";
import Banner from "./banner";
import CTA from "./cta";
// import { Counter } from "#/components/counter";
import Counter from "./counter";

const Home = () => {
  return (
    <div>
      <Hero />
      <Counter/>
      <Innovation />
      <Explore/>
      <Banner/>
      <Experience />
      <Article />
      <CTA/>
      
    </div>
  );
};

export default Home;
