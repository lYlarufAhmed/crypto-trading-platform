import styled from 'styled-components'
import BitCoinCard from "./BitCoinCard";

const Wrapper = styled.div`
display: flex;
gap: .4rem;
`

export default function BitCoins(props){
    return (
        <Wrapper>
            <BitCoinCard/>
        </Wrapper>
    )

}