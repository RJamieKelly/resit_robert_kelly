import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Coin from "./Coin";




function App() {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    const filteredCoins = coins.filter(coin =>
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    );
    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res => {
                setCoins(res.data);
                console.log(res.data);
            })
            .catch(error => console.log(error));
    }, []);
    return (
        <div className="App">
            <p>Cryptocurrencies ranked by market cap</p>

    {filteredCoins.map(coin => {
        return (
            <Coin
                key={coin.id}
                name={coin.name}
                volume={coin.market_cap}
                image={coin.image}
                price={coin.current_price}
                priceChange={coin.price_change_percentage_24h}
                marketcapChange={coin.market_cap_change_percentage_24h}
                symbol={coin.symbol}
                marketcap={coin.total_volume}
                rank={coin.market_cap_rank}
            />
        );

    })}
        </div>
    );

}



export default App;