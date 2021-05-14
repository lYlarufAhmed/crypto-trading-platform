import styled from 'styled-components'

const Card = styled.div`
display: flex;
flex-direction: column;
padding: .2rem .4rem;
border-left: 7px solid black;
border-radius: .5rem;
border-color: ${props=>props.loss ? 'red':'green'}
`

export default function TransactionCard(props){
    return (
        <Card>
            <h5>Dodgecoin-50@$0.511143</h5>
            <h6>Paid: $25.59</h6>
            <small>Bought on 13/1/2021 10:45:20</small>
        </Card>
    )
}