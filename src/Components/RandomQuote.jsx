import React,{useState} from "react";
import "../App.css";

function RandomQuote() {
    let quotes = [];

    const loadQuotes = async() =>{
        const response = await fetch('https://type.fit/api/quotes');
        quotes = await response.json()
    }
        const [quote, setQuote] = useState({
        text:"Hello Guys.",
        author: "Gowrisanker",
    }); 

    const generateQuote = () =>{
        const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(selectedQuote)
    }
    loadQuotes()
    const twitter = ()=>{
        window.open(`https://twitter.com/intent/tweet?text=${quote} - ${quote.author.split(',')[0]}`)
    }
  return (
    <div>
      <div className="container">
        <p className="text">{quote.text}</p>
        <div className="line"></div>
        <div className="author">-{quote.author.split(',')[0]}</div>{/* here to avoit the type fit in the autor section we use split inside split we provide from where we want to split and [0] means access the 0th element after the split ie the author name */}
        <button onClick={() => {generateQuote()}} className="button">
          <img src="/refresh.png" alt="" height={20} width={20} />
        </button>
        <p onClick={()=>{twitter()}} className="twitter">twitter</p>
      </div>
    </div>
  );
}

export default RandomQuote;
