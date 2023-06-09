import React, { useEffect, useState } from "react";
import Coin from "./Product";
import Loader from "./Loader";
import axios from "axios";

const Home = () => {
  // const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  // let [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("Working");
  //   return(() => {
  //     console.log("Unmount!")
  //   })
  // }, [count]);

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllCoins = async () => {
      try {
        const {data} = await axios.get(
          // "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=200"
          "https://api.coingecko.com/api/v3/coins/list"
          // "https://jsonplaceholder.typicode.com/posts"
        );
        setCoins(data);
        console.log(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    fetchAllCoins();
  }, [loading]);

  return (
    <div className="home">
      {
        loading ? (<Loader />) :
          coins.map((coin) => 
            <Coin name={coin.name} symbol={coin.symbol} key={coin.key} />
          )
        }
      
      {/* <button onClick={() => setCount(count++)}>Pressed</button> */}
      {/* <p>{count}</p> */}
    </div>
  );
};

export default Home;
