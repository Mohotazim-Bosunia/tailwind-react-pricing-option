import { Suspense } from "react";
import "./App.css";
import Navber from "./Components/Navber/Navber";
import PricingOptions from "./Components/PricingOptions/PricingOptions";

const fetchPrichingData = async () => {
  const res = await fetch("pricingData.json");
  return res.json();
};
const promiseFetch = fetchPrichingData();
// console.log(promiseFetch)

function App() {
  return (
    <>
      <nav>
        <Navber></Navber>
      </nav>
      <main>
        <Suspense fallback={"Loding..."}>
          <PricingOptions promiseFetch={promiseFetch}></PricingOptions>
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
