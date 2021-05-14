import { useState } from "react";
import MyCrpto from "../context/MyCrypto"

export default function Main(){
    let [wallet,setWallet] = useState(100);
    let [portfolio,setPortfolio] = useState(0);
    let [bitcoins,setBitcoins] = useState(0);
    let [ethereum,setEthereum] = useState(0);
    let [dogecoin, setDogecoin] = useState(0);
    let [transactions,setTransactions] = useState([]);
    let [holdings, setHoldings] = useState([]);

    return(
        <MyCrpto.Provider value={{
            getWallet: wallet,
            setNewWaller: setWallet,
            getPorfolio: portfolio,
            setNewPortfolio: setPortfolio,
            getBitcoins:bitcoins,
            setNewBitcoins: setBitcoins,
            getEthereum: ethereum,
            setNewEthereum: setEthereum,
            getDogecoin: dogecoin,
            setNewDogecoin: setDogecoin,
            getTransactions: transactions,
            setNewTransactions: setTransactions,
            getHoldings: holdings,
            setNewHoldings: setHoldings
        }}>

        </MyCrpto.Provider>
    )

}