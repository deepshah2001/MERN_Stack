import Home from "./components/Home";
import { useSelector } from "react-redux";
import './App.css';

function App() {
  const {c} = useSelector(state => state.custom);
    return (
    <div>
      <h1>{c}</h1>
      <Home />
    </div>
  );
}

export default App;
