import React from 'react';
import './Coin.css';

const Coin = ({
                  price,
                  symbol,
                  rank,
                  hex,
                  volume,
                  image,
                  marketcap,
                  priceChange,


              }) => {

    return (<div className='coin-container'>

            <div>
                <div id='button'>
                    <header> {hex}</header>
                </div>
                <div>

                    <div className='border '>
                        <div className='coinRow'>
                            <div className='coin'>
                                <p className='rank'> {rank} </p>

                                <img src={image} alt='crypto'/>
                                <p className='coinSymbol'>{symbol}</p>
                            </div>
                            <div className='coinData'>

                                <p className='coinPrice'>${price}</p>
                                <p className='coinVolume'>24H Volume: ${volume.toLocaleString()}</p>
                                {priceChange < 0 ? (
                                    <p className='coinPercent red'>{priceChange.toFixed(2)}%</p>
                                ) : (
                                    <p className='coinPercent green'>{priceChange.toFixed(2)}%</p>
                                )}
                                <p className='coinMarketcap'>
                                    Mkt Cap: ${marketcap.toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );

};

export default Coin;