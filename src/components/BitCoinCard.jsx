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
            <CoinImage/>
            <InfoContainer>
            <h3>$4343</h3>
                <p>Bitcoin</p>
                <small>Last 24h: <Change loss>-32</Change></small>
        </InfoContainer>
        </Container>
    )
}