import styled from 'styled-components'

const Card = styled.div`
display: flex;
flex-direction: column;
padding: .2rem .4rem;
border-left: 5px solid;
border-radius: .3rem;
border-color: ${props=>props.loss ? 'red':'green'};
height: 4rem;
justify-content: space-around;
`

export default function TransactionCard(props){
    return (
        <Card loss={props.action !== "buy"}>
            <p>{props.coin}-{props.ammount}@${props.price}</p>
            <p>{props.action==="buy"?"Paid: ":"Received: "}{props.ammount*props.price}</p>
            <small>Bought on {props.tDate}</small>
        </Card>
    )
}