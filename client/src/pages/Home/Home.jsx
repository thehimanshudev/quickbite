import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import Reviews from "../../components/reviews/Reviews";
import QuickBiteCTA from "../../components/CTA/QuickBiteCTA";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <Reviews />
      <QuickBiteCTA />
    </div>
  );
};

export default Home;
