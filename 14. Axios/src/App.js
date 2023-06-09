import axios from "axios";
import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  const [myData, setMyData] = useState([]);
  const getApi = async() => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setMyData(res.data);
  };

  useEffect(() => {
    getApi();
  }, []);
  return (
    <div>
    {myData.map((post) => {
      const {id, title, body} = post;
      return <div className="card" key={id}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    })}
    </div>
  );
}

export default App;
