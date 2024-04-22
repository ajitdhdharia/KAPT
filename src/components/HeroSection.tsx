import React from "react";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

const HeroSection = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(/images/HomeImage.png)" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <HeroHighlight className="mb-5 text-5xl font-bold">
              Hello there, Provident cupiditate voluptatem et in. Quaerat fugiat
              ut assumenda excepturi exercitationem quasi. In deleniti eaque aut
              repudiandae et a id nisi.
            </HeroHighlight>
            {/* <Highlight className="mb-5">
              
            </Highlight> */}
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
