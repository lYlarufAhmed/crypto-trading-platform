import styled from 'styled-components'
import BitCoinCard from "./BitCoinCard";

const Wrapper = styled.div`
display: flex;
// gap: .4rem;
width: 100%;
justify-content: center;
gap: .8rem;
`

export default function BitCoins(props){
    return (
        <Wrapper>
            <BitCoinCard/>
            <BitCoinCard/>
            <BitCoinCard/>
        </Wrapper>
    )

}