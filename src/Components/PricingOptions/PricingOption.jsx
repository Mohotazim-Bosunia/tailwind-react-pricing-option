import React from "react";
import Feature from "./Feature";

const PricingOption = ({ priceData }) => {
  //   console.log(priceData);
  const { name, price, duration, features } = priceData;
  return (
    <div className="flex flex-col border bg-fuchsia-300 rounded-2xl mt-4 p-2.5">
      <div className="ml-4">
        <h1 className="text-5xl">{name}</h1>
        <h2 className="text-2xl">
          ${price}
          {duration}
        </h2>
      </div>
      <div className="flex-1 border bg-amber-200 rounded-2xl m-4">
        {features.map((option, index) => (
          <Feature key={index} option={option}></Feature>
        ))}
      </div>
      <button className="w-full bg-blue-400 border rounded-md p-2 hover:bg-emerald-400 ">
        Subscribe
      </button>
    </div>
  );
};

export default PricingOption;
