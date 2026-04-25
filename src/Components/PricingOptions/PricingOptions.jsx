import React, { use } from "react";
import PricingOption from "./PricingOption";

const PricingOptions = ({ promiseFetch }) => {
  const pricingOption = use(promiseFetch);
  // console.log(pricingOption);
  return (
    <div>
      <h1 className="text-3xl">Get Our Membership</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {pricingOption.map((priceData) => (
          <PricingOption
            key={priceData.id}
            priceData={priceData}
          ></PricingOption>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
