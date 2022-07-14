import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";


/*useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res => {
            setCoins(res.data);
            console.log(res.data);
        })
        .catch(error => console.log(error));
}, []);*/

function App() {
    return (
        <div className="App">
            <p>Cryptocurrencies ranked by market cap</p>
        </div>
    );
}

export default App;