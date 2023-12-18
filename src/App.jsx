import { useState } from "react";
import "./App.css";
import RandomQuote from "./Components/RandomQuote";

function App() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const generateQuote = async (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <RandomQuote />
    </div>
  );
}

export default App;
