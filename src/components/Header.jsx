import {useContext} from "react";
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

const SmallText = styled.small`
    color: #535252;
`;

export default function Header() {
    let data = useContext(MyCrypto);

    return (
        <HeaderContainer>
            <h2>
                Earn some virtual money 💎💰💎
            </h2>
            <SmallText>
                To buy virtual food 🍜
            </SmallText>
            <h4>
                🏛️ Wallet:
                $ {data.getWallet ? Math.floor(data.getWallet) !== data.getWallet ? data.getWallet.toFixed(3) : data.getWallet : "0.00"}
            </h4>
            <h3>
                Portfolio Value:
                $ {data.getPortfolio === Math.floor(data.getPortfolio) ? data.getPortfolio : data.getPortfolio.toFixed(3)}
            </h3>
            <BitCoins/>
        </HeaderContainer>
    )
}
