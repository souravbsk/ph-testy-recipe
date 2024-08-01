import React from "react";
import Banner from "./Banner/Banner";
import CountUpSection from "./CountUpSection/CountUpSection";
import OurRecipes from "../OurRecipes/OurRecipes";
import DevInfo from "./DevInfo/DevInfo";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <h1>deploy by github pipeline</h1>
      <CountUpSection></CountUpSection>
      <OurRecipes></OurRecipes>
      <DevInfo></DevInfo>
    </div>
  );
};

export default Home;
