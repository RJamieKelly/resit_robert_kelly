import React from 'react';

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
return(
    <div className='border '>
        <div className='coinRow'>
            <div className='coin'>
                <p className='rank'> {rank} </p>


            </div>
        </div>
    </div>
);
}
export default Coin;
