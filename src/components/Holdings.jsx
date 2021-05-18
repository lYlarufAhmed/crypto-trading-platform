import {useContext} from 'react';
import styled from 'styled-components'
import MyCrypto from '../context/MyCrypto';
import HoldingCard from "./HoldingCard";

const Container = styled.div`
display: flex;
flex-direction: column;
flex: 1;
`

export default function Holdings() {
    let data = useContext(MyCrypto);
    let coins = Object.entries(data.getHoldings);
    let currentPrices = [data.getBitcoins.current_price, data.getEthereum.current_price, data.getDogecoin.current_price];
    console.log(coins);
    return (
        <Container>
            <h2>Current Holdings</h2>
            {
                //eslint-disable-next-line
                coins.map((e,index)=>{
                   if(e[1].stock > 0) return <HoldingCard key={e[0]+"-"+Math.random()+"-"+data.getWallet} coinName={e[0]} holdingObj={e[1]} currentPrice={currentPrices[index]}/>
                })
            }
        </Container>
    )
}