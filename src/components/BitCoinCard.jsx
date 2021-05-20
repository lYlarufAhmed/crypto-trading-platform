import styled from 'styled-components'
import MyCrypto from "../context/MyCrypto";
import {useContext} from "react";

const Container = styled.div`
display: flex;
`
const CoinImage = styled.img`
flex: 1 1 30%;
max-width: 30%;
height: 100%;
object-fit: contain;
`
const InfoContainer = styled(Container)`
flex: 1 1 70%;
flex-direction: column;
`
const Change = styled.span`
color: ${props => props.loss ? 'red' : 'green'};
`

const Card = styled(Container)`
border-radius: .6rem;
box-shadow: 1px 1px 3px 3px lightgrey;
flex:1 1 30rem;
gap: .5rem;
align-items: center;
padding: .3rem .5rem;
min-width: 15rem;

:hover{
cursor: pointer;
background: rgba(231,214,210, .9);
}
`


export default function BitCoinCard(props) {
    let data  = useContext(MyCrypto)
    let handleClick = (e)=> {
        data.setNewCurrentlySelected(props.coinData);
        data.setNewHideDialog(false);
    }
    return (
            <Card onClick={handleClick}>
                <CoinImage src={props.iconImage} />
                <InfoContainer>
                    <h4>${props.currentPrice}</h4>
                    <p>{props.coinName}</p>
                    <small>Last 24h: <Change loss={props.marketCap < 0}>{props.marketCap}</Change></small>
                </InfoContainer>
            </Card>
    )
}