import { createContext } from "react";

let obj ={
    name:"",current_price:"",market_cap_change_percentage_24h:""
}

let MyCrypto = createContext(obj);

export default MyCrypto;