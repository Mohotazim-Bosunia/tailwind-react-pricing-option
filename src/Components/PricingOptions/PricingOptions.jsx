import React, { use } from "react";

const PricingOptions = ({ promiseFetch }) => {
  const pricingOption = use(promiseFetch);
  console.log(pricingOption);
  return <div></div>;
};

export default PricingOptions;
