import { useContext } from 'react';
import styled from 'styled-components'
import MyCrypto from '../context/MyCrypto';
import BitCoinCard from "./BitCoinCard";

const Wrapper = styled.div`
display: flex;
// gap: .4rem;
width: 100%;
justify-content: center;
gap: .8rem;
`


export default function BitCoins(props){
    let data = useContext(MyCrypto);
    return (
        <Wrapper>
            {
                [data.getBitcoins,data.getEthereum,data.getDogecoin].map((e)=>{
                     return <BitCoinCard coinName ={e.name} iconImage ={e.image} currentPrice = {e.current_price} marketCap={parseFloat(e.market_cap_change_percentage_24h).toFixed(2)}/>
                })
            }
        </Wrapper>
    )

}