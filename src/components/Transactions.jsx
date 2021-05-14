import styled from 'styled-components'
import TransactionCard from "./TransactionCard";

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 1.2rem;
flex: 1;
`
export default function Transactions(){
       return (
        <Container>
            <h2>Current Transactions</h2>
            <TransactionCard />
            <TransactionCard loss/>
            <TransactionCard />
        </Container>
    )
}