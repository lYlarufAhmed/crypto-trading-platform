import { useEffect, useState } from "react";
import MyCrpto from "../context/MyCrypto"
import Header from "./Header";


const API_BITCOIN = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false";
const API_ETHEREUM = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum&order=market_cap_desc&per_page=100&page=1&sparkline=false";
const API_DOGECOIN = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=dogecoin&order=market_cap_desc&per_page=100&page=1&sparkline=false";
export default function Main() {
    let [wallet, setWallet] = useState(100);
    let [portfolio, setPortfolio] = useState(0);
    let [bitcoins, setBitcoins] = useState({ name: "", current_price: "", market_cap_change_percentage_24h: "" });
    let [ethereum, setEthereum] = useState({ name: "", current_price: "", market_cap_change_percentage_24h: "" });
    let [dogecoin, setDogecoin] = useState({ name: "", current_price: "", market_cap_change_percentage_24h: "" });
    let [transactions, setTransactions] = useState([]);
    let [holdings, setHoldings] = useState([]);


    useEffect(
        async () => {
            let bitcoinData = await (await fetch(API_BITCOIN)).json();
            setBitcoins(bitcoinData[0]);
            let ethereumData = await (await fetch(API_ETHEREUM)).json();
            setEthereum(ethereumData[0]);
            let dogecoinData = await (await fetch(API_DOGECOIN)).json();
            setDogecoin(dogecoinData[0]);
        }

        , []);

    return (
        <MyCrpto.Provider value={{
            getWallet: wallet,
            setNewWaller: setWallet,
            getPorfolio: portfolio,
            setNewPortfolio: setPortfolio,
            getBitcoins: bitcoins,
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
            <Header></Header>
        </MyCrpto.Provider>
    )

}