import styled from 'styled-components'

const Card = styled.div`
display: flex;
flex-direction: column;
padding: .5rem .2rem;
`
const Calculation = styled.p`
color: ${props => props.loss ? 'red' : 'green'};
`

export default function HoldingCard(props) {
    let totalPay = parseFloat(props.holdingObj.stock) * parseFloat(props.holdingObj.avg);
    let totalValue = parseFloat(props.holdingObj.stock) * parseFloat(props.currentPrice)
    let profit = totalValue - totalPay;
    return (
        <Card>
            <p>{props.coinName}: {props.holdingObj.stock}</p>
            <small>Total Paid: $ {totalPay}, Current Value: $ {totalValue}</small>
            <Calculation loss={profit < 0}>P/L: $ {profit} {profit > -1 ? '🚀':'🔻'}</Calculation>
        </Card>
    )
}