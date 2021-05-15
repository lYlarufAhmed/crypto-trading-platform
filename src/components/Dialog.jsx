import { useContext, useEffect, useState } from "react";
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
        display:flex;
        justify-content:space-between;
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

const CloseButton = styled.button`
    background-color:transparent;
    font-size:18px;
    border:0;
    color:white;
    font-weight:bold;
`;

export default function Dialog(props) {
    let data = useContext(MyCrypto);
    console.log("Dialog Data");
    console.log(data);
    let [action, setAction] = useState("buy");
    let [isDisabled, setDisabled] = useState(true)
    let [ammount,setAmmout] = useState(0);
    let getMaxBuy = () => {
        return parseFloat(data.getWallet / data.getCurrentlySelected.current_price);
    }

    let getMaxSell = () => {

        return 9;
    }

    let actionHandler =()=>{
        if(action==="buy"){
            let price = data.getCurrentlySelected.current_price;
            data.setNewWallet(data.getWallet- (ammount*price));
            let currentHolding = data.getHoldings;
            if(currentHolding[data.getCurrentlySelected.id]);{
                let coin = currentHolding[data.getCurrentlySelected.id];
                let holdingsTotalPrice = (coin.stock * coin.avg) + (ammount*price) ;
                let newStock = parseInt(coin.stock) + parseInt(ammount);
                let newAvg = holdingsTotalPrice / newStock;
                let tempObj = JSON.parse(JSON.stringify(data.getHoldings));
                tempObj[data.getCurrentlySelected.id].stock = newStock;
                tempObj[data.getCurrentlySelected.id].avg = newAvg;
                console.log(coin);
                console.log(newStock);
                console.log(newAvg);
                console.log(tempObj);
                data.setNewHoldings(tempObj);
            }
        }
        else{
            
        }
    }

    return (
        < Container hidden={data.getHideDialog} >
            <BlackBg onClick={()=> data.setNewHideDialog(!data.getHideDialog)} />
            <ContentContainer>
                <TitleContainer>
                    <Heading2>
                        {action} {data.getCurrentlySelected.name}
                    </Heading2>
                    <CloseButton onClick={()=> data.setNewHideDialog(!data.getHideDialog)}>X</CloseButton>
                </TitleContainer>
                <Text> Currennt Price: $
                            {data.getCurrentlySelected.current_price}
                </Text>
                <InputContainer >
                    <InputField type="number" onChange={(e) => {
                        if (e.target.value === "0" ||e.target.value=== "" || parseFloat(e.target.value) > parseFloat(getMaxBuy())) setDisabled(true);
                        else {
                            setDisabled(false);
                            setAmmout(e.target.value);
                        }
                       
                    }} />
                    <Text>
                        Max:
                        {action === "buy" ? getMaxBuy() : getMaxSell()}
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

                <ButtonAction disabled={isDisabled} onClick={actionHandler}>{action}</ButtonAction>


            </ContentContainer>
        </Container >

    )
}