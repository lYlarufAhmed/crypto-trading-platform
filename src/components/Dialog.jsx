import { useContext, useState } from "react";
import styled from "styled-components";
import MyCrypto from "../context/MyCrypto";
const Container = styled.div`
        height: 100vh;
        width: 100vw;
        align-items:center;
        justify-content:center;
        position:absolute;
        top:0;
        left:0;
        z-index:1;
        display: ${props=>props.hidden?"none":"flex"};
   `;

const BlackBg = styled.div`
        position:fixed;
        height:100vh;
        width:100vw;
        background-color:black;
        opacity: 0.8;
        top:0;
        left:0;
        z-index:2;
    `;

const ContentContainer = styled.div`
        display:flex;
        flex-direction: column;
        flex-wrap:wrap;
        min-height:500px;
        min-width: 500px;
        background-color:white;
        z-index:3;
        border-radius:20px;
   `;
const TitleContainer = styled.div`
        width:100%;
        background-color:black;
        padding: 10px 30px;
        border-top-left-radius:20px;
        border-top-right-radius:20px;
   `;

const Heading2 = styled.h1`
        color: white;
        text-transform:capitalize;
    `;
const Text = styled.p`
    
    `;

const InputContainer = styled.div`
        display:flex;
        width:100%;
        gap:5px;
    `;
const InputField = styled.input`
        width:50%;
    `;

const RadioButton = styled.input`
`;

const ButtonAction = styled.button`
    padding: 10px 20px;
    color:white;
    background-color:black;
    border-radius:10px;
    text-transform:uppercase;
    &:disabled{
        background-color:grey;
    }
`;

const RadioWrapper = styled.div`

    display:flex;
    justify-content:flex-start;
    align-items:center;
    gap:10px;
`;

export default function Dialog(props) {
    let data = useContext(MyCrypto);
    console.log("Dialog Data");
    console.log(data);
    let [action, setAction] = useState("");
    let [isDisabled, setDisabled] = useState(true)
    let getMaxBuy = () => {
        return parseFloat(data.getWallet / data.getCurrentlySelected.current_price);
    }

    let getMaxSell = () => {

        return 9;
    }
    return (
        < Container hidden={data.getHideDialog} >
            <BlackBg />
            <ContentContainer>
                <TitleContainer>
                    <Heading2>
                        {action} {data.getCurrentlySelected.name}
                    </Heading2>
                </TitleContainer>
                <Text> Currennt Price: $
                            {data.getCurrentlySelected.current_price}
                </Text>
                <InputContainer >
                    <InputField type="number" onKeyPress={(e) => {
                        if (e.target.value === "0" || "") setDisabled(true);
                        else setDisabled(false);
                    }} />
                    <Text>
                        Max:
                        {action === "buy" ? getMaxBuy(data.getCurrentlySelected.name) : getMaxSell()}
                    </Text>
                </InputContainer>
                <RadioWrapper>
                    <RadioButton type="radio" name="action" checked={action === "buy"} onChange={() => setAction("buy")} />
                    <label htmlFor="a">Buy</label>
                </RadioWrapper>
                <RadioWrapper>
                    <RadioButton type="radio" name="action" checked={action === "sell"} onChange={() => setAction("sell")} />
                    <label htmlFor="a">Sell</label>
                </RadioWrapper>

                <ButtonAction disabled={isDisabled}>{action}</ButtonAction>


            </ContentContainer>
        </Container >

    )
}