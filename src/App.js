import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [usd, setUsd] = useState();
  const [coin, setCoin] = useState();
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
        setCoin(json[0].quotes.USD.price);
      });
  }, []);
  const onChange = (event) => {
    setCoin(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    setUsd(event.target.value);
  }
  return (
    <div>
      <h1>Coin Converter ({coins.length})</h1>
      <hr />
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onChange}>
          {coins.map((coin) => (
            <option value={coin.quotes.USD.price}>
              {coin.name} {coin.symbol}: {coin.quotes.USD.price.toFixed(3)} USD
            </option>
          ))}
        </select>
      )}
        <input type="number" placeholder="Write your USD" value={usd} onChange={onSubmit} />
        <br />
      <div>
        {usd ? usd : 0} USD = {(usd/coin).toFixed(3) ? (usd/coin).toFixed(5) : 0} COIN
      </div>
    </div>
  );
}

export default App;
