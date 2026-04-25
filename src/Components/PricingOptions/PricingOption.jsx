import React from "react";
import Feature from "./Feature";

const PricingOption = ({ priceData }) => {
  //   console.log(priceData);
  const { name, price, duration, features } = priceData;
  return (
    <div className="border bg-fuchsia-300 rounded-2xl mt-4 p-2.5">
      <div className="ml-4">
        <h1 className="text-5xl">{name}</h1>
        <h2 className="text-2xl">
          ${price}
          {duration}
        </h2>
      </div>
      <div className=" border bg-amber-200 rounded-2xl m-4">
        {features.map((option, index) => (
          <Feature key={index} option={option}></Feature>
        ))}
      </div>
    </div>
  );
};

export default PricingOption;
