import React from 'react';
import Card from './components/Card';
import './styles/Global.scss';

export type coinType = {
  name:string,
  image:string,
  color:string,
  price:string,
  changePercentage:number,
  TVL:string,
  popularPairs: string[]
}

function App() {
  const coins: coinType[] = [
    {
    name:'Bitcoin (BTC)',
    image:'/coins/Bitcoin.png',
    color:'rgba(234,179,0,0.3)',
    price:'31,812.80',
    changePercentage:10,
    TVL:'60,000',
    popularPairs: ['/coins/Solana.png','/coins/ethereum.jpg','/coins/bnb.png']
  },
  {
    name:'Solana (SOL)',
    image:'/coins/Solana.png',
    color:'rgba(220,31,255,0.1)',
    price:'32.83',
    changePercentage:-12.32,
    TVL:'60,000',
    popularPairs: ['/coins/Bitcoin.png','/coins/ethereum.jpg','/coins/bnb.png']
  },
  {
    name:'Ethereum (ETH)',
    image:'/coins/ethereum.jpg',
    color:'rgba(237,240,244,0.1)',
    price:'1,466.45',
    changePercentage:-11.93,
    TVL:'60,000',
    popularPairs: ['/coins/Solana.png','/coins/Bitcoin.png','/coins/bnb.png']
  },
  {
    name:'Binance USD (BUSD)',
    image:'/coins/bnb.png',
    color:'rgba(234,179,0,0.3)',
    price:'1.00',
    changePercentage:0.26,
    TVL:'60,000',
    popularPairs: ['/coins/Solana.png','/coins/ethereum.jpg','/coins/Bitcoin.png']
  },
  {
    name:'Shiba Inu (SHIB)',
    image:'/coins/shiba.svg',
    color:'rgba(228,45,4,0.1)',
    price:'0.00000001948',
    changePercentage:-8.1,
    TVL:'60,000',
    popularPairs: ['/coins/Solana.png','/coins/ethereum.jpg','/coins/bnb.png']
  }
]
  return (
    <main className="App">
      <section className='cards-holder'>
        {coins.map((coin,i)=><Card key={i} coinData={coin} />)}
      </section>
    </main>
  );
}

export default App;
