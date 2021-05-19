import { useContext } from "react";
import styled from "styled-components"
import MyCrypto from "../context/MyCrypto"
import BitCoins from "./BitCoins";


const HeaderContainer = styled.div`
    display:flex;
    min-height: 30vh;
    width: 100vh;
    flex-direction:column;
    flex-wrap: wrap;
    justify-content:flex-start;
    align-items:center;
`;

const Heading = styled.h1`

`;

const Heading2 = styled.h2`

`;

const SmallText = styled.p`
    color: #535252;
`;

export default function Header(){
    let data = useContext(MyCrypto);

    return( 
        <HeaderContainer>
            <Heading>
                Earn some virtual money 💎💰💎
            </Heading>
            <SmallText>
                To buy virtual food 🍜
            </SmallText>
            <Heading2>
                🏛️ Wallet: $ {data.getWallet? data.getWallet: "0.00"}
            </Heading2>
            <Heading>
                Portfolio Value: $ {data.getPortfolio}
            </Heading>
            <BitCoins />
        </HeaderContainer>
    )
}
