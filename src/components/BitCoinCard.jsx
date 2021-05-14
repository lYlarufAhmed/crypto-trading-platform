import styled from 'styled-components'

const Container = styled.div`
display: flex;
`
const CoinImage = styled.img`
flex: 1 1 20%;
height: 100%;
object-fit: contain;
`
const InfoContainer = styled(Container)`
flex-direction: column;
`
const Change = styled.span`
color: ${props=>props.loss ? 'red':'green'};
`

export default function  BitCoinCard(props){
    return(
        <Container>
            <CoinImage src={props.iconImage}/>
            <InfoContainer>
            <h3>${props.currentPrice}</h3>
                <p>{props.coinName}</p>
                <small>Last 24h: <Change loss={props.marketCap<0}>{props.marketCap}</Change></small>
        </InfoContainer>
        </Container>
    )
}