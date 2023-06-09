import React from "react";
// import { useParams } from "react-router-dom";

const Coin = ({ name, symbol }) => {
  // const params = useParams();
  return (
    // <h1>Product ID = {params.id}</h1>
    <div className="coin">
      <h1>{name}</h1>
      <p>{symbol}</p>
    </div>
  );
};

export default Coin;
