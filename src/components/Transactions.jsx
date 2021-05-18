import { useContext } from 'react';
import styled from 'styled-components'
import MyCrypto from '../context/MyCrypto';
import TransactionCard from "./TransactionCard";

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 1.2rem;
flex: 1;
`
export default function Transactions(){
        let data = useContext(MyCrypto);
        console.log("Transactions");
        console.log(data.getTransactions);
       return (
        <Container>
            <h2>Current Transactions</h2>
            {   data.getTransactions.length===0&&
                <h2>No transactions.</h2>
            }
            {
                data.getTransactions.map((e)=>{
                  return  <TransactionCard key={e.action+""+e.transactionDate+""+Math.random()} action={e.action} coin={e.coin} price={e.price} ammount={e.pieces} tDate={e.transactionDate}/>
                })
            }
        </Container>
    )
}