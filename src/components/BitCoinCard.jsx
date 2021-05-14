import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex: 1 1 30%;
`
const CoinImage = styled.img`
flex: 1 1 30%;
max-width: 30%;
height: 100%;
object-fit: contain;
`
const InfoContainer = styled(Container)`
flex-direction: column;
`
const Change = styled.span`
color: ${props => props.loss ? 'red' : 'green'};
`

const Card = styled(Container)`
border-radius: .6rem;
box-shadow: 1px 1px 3px 7px lightgrey;
gap: .5rem;
padding: 1rem 1.5rem;
`

export default function BitCoinCard(props) {
    return (
        <Container>
            <Card>
                <CoinImage src={props.iconImage} />
                <InfoContainer>
                    <h3>${props.currentPrice}</h3>
                    <p>{props.coinName}</p>
                    <small>Last 24h: <Change loss={props.marketCap < 0}>{props.marketCap}</Change></small>
                </InfoContainer>
            </Card>
        </Container>
    )
}