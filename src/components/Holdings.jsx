import styled from 'styled-components'
import HoldingCard from "./HoldingCard";

const Container = styled.div`
display: flex;
flex-direction: column;
flex: 1;
`

export default function Holdings(){
    return (
        <Container>
            <h2>Current Holdings</h2>
            <HoldingCard/>
            <HoldingCard/>
            <HoldingCard/>
        </Container>
    )
}