import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';


function App() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    const [hex, setHex] = useState('');
    const handleChange = event => {
        setSearch(event.target.value);
    };
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
    axios.get('https://uniswapdataapi.azurewebsites.net/api/hexPrice')
        .then((response) => {
            setHex(response.data.hexUsd);
            console.log(response);
        });






    return (


        <div className='coinApp'>
            <div>
                <div id='hexPrice'>
                    <button>Hex price: {hex}</button>
                </div>
            </div>

            <h2 className='coinCap'> Cryptocurrencies ranked by market cap</h2>

            <div className='coinLinks'>
                <li><a href='https://dex.vision/'><img
                    src='https://s2.coinmarketcap.com/static/img/coins/200x200/5015.png' width={250} height={250}
                    onClick={'https://dex.vision/'}/></a></li>
            </div>


            <div className='coinSearch'>
                <h1 className='coinText'>Search a coin</h1>
                <form>
                    <input
                        className='coinEnter'
                        type='text'
                        onChange={handleChange}
                        placeholder='Search...'
                    />


                </form>
            </div>
            {filteredCoins.map(coin => {
                return (
                    <Coin
                        key={coin.id}
                        name={coin.name}
                        price={coin.current_price}
                        symbol={coin.symbol}
                        marketcap={coin.total_volume}
                        rank={coin.market_cap_rank}
                        volume={coin.market_cap}
                        image={coin.image}
                        priceChange={coin.price_change_percentage_24h}
                        marketcapChange={coin.market_cap_change_percentage_24h}
                    />
                );
            })}
        </div>


    );

}


export default App;


