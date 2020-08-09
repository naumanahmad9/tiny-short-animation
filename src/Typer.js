import React from "react";
import Typical from "react-typical";

const Typer = () => {
  return (
    <div className="hero-content">
      <h6 className="">HI, WE'RE JUNTO</h6>
      <h1>We are here to</h1>
      <Typical
        steps={[
          "outrank the competition.",
          1750,
          "create badass content.",
          1750,
          "generate more leads.",
          1750,
          "close more deals.",
          1750,
        ]}
        loop={Infinity}
        wrapper="h1"
      />
      <button>Let's make it happen</button>
      <span>How we work</span>
    </div>
  );
};
export default Typer;
