import styled from 'styled-components'

const Card = styled.div`
display: flex;
flex-direction: column;
padding: .2rem .4rem;
border-left: 7px solid black;
border-radius: .5rem;
border-color: ${props=>props.loss ? 'red':'green'};
`

export default function TransactionCard(props){
    return (
        <Card loss={props.action==="buy"?false:true}>
            <h5>{props.coin}-{props.ammout}@${props.price}</h5>
            <h6>{props.action==="buy"?"Paid: ":"Received: "}{props.ammount*props.price}</h6>
            <small>Bought on {props.tDate}</small>
        </Card>
    )
}