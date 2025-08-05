"use client";

import React from "react";
import ImgHero from "./components/home/ImgHero";
import Stats from "./components/home/Stats";
import Cards from "./components/home/Cards";
import Network from "./components/home/Network";
import Leadership from "./components/home/Leadership";
import Products from "./components/home/Products";
import Careers from "./components/home/Careers";
import HomeHero from "./components/home/HomeHero";
import dynamic from "next/dynamic";

const DynamicWorldMap = dynamic(() => import("./components/worldMap"), {
  ssr: false,
});
const Home = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <ImgHero />
        <HomeHero />
        <Cards />
        <Network />
        <div className="max-w-[1440px] mx-auto px-0">
          <DynamicWorldMap />
        </div>
        {/* <Leadership /> */}
        <Products />
        <Stats />

        <Careers />
      </div>
    </>
  );
};

export default Home;
