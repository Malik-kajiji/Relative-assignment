import React from 'react';
import type { coinType } from '../App';

const Card = ( coinData : {coinData: coinType} ) => {
    const {name,image,color,changePercentage,price,TVL,popularPairs } = coinData.coinData;
    const imageHolder : React.CSSProperties = {
        backgroundImage:`linear-gradient(rgba(98,106,136,0.1) 60%, ${color} 90%)`
    }

    return (
        <article className='card'>
            <div className='image-holder' style={imageHolder}>
                <img src={image} alt="" />
            </div>
            <div className='other-data'>
                <p className='TXT-normal name'>{name}</p>
                <p className='price-change'> <span className='TXT-number'>${price}</span>
                {changePercentage > 0?
                    <span className='TXT-normal' style={{color:'#00FFA3'}}>+{changePercentage}%</span>
                :
                    <span className='TXT-normal' style={{color:'#FF4D4D'}}>{changePercentage}%</span>
                }
                </p>
                <p className='TXT-normal'>price</p>
                <p className='price'> <span className='TXT-number'>${TVL}</span></p>
                <p className='TXT-normal'>TVL</p>
                <div className='popular-pairs'>
                    {popularPairs.map((image,i)=><img key={i} src={image} alt="" />)}
                </div>
                <p className='TXT-normal'>Popular pairs</p>
            </div>
        </article>
    )
}

export default Card