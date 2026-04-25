import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
const Feature = ({ option }) => {
  //   console.log(option);
  return (
    <div>
      <p className="flex m-4">
        <AiFillCheckCircle className="mt-1.5"></AiFillCheckCircle> {option}
      </p>
    </div>
  );
};

export default Feature;
