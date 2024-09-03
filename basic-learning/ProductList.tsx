import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching Products in", category);
    setProducts(["Clothing", "Housing"]);
  }, [category]);

  return <div>ProductList</div>;
};

export default ProductList;

/* import { useEffect, useRef, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {
  const [category, setCetegory] = useState("");
  // After Render
  useEffect(() => {});

  return (
    <>
      <h2>Testing</h2>
      <div className="m-3">
        <ProductList category={category} />
        <select
          className="form-select"
          onChange={(event) => setCetegory(event.target.value)}
        >
          <option value="">Select Option</option>
          <option value="Clothing">Clothing</option>
          <option value="Household">Household</option>
        </select>
      </div>
    </>
  );
}

export default App; */
