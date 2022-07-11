import React from "react";
import Content from "../components/home/Content";

import FeaturedMovies from "../components/home/FeaturedMovies";
import FeaturedTVShows from "../components/home/FeaturedTVShows";
import HeroSection from "../components/home/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedMovies />
      <Content/>
      <FeaturedTVShows />
      <Content/>
    </div>
  );
};

export default Home;
