import styled from 'styled-components'

const Card = styled.div`
display: flex;
flex-direction: column;
padding: .5rem .2rem;
`
const Calculation = styled.p`
color: ${props=> props.loss ? 'red':'green'}
`

export default function HoldingCard(props){
    return (
        <Card>
            <p>DodgeCoin: 50</p>
            <p>Total Paid: $25.50, Current Value: $25.59</p>
            <Calculation loss>P/L: $0.00</Calculation>
        </Card>
    )
}