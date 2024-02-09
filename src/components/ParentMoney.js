import { useState } from "react";
import { PocketMoney } from "./PocketMoney";

export const ParentMoney=()=>{
    const [money,setMoney]=useState(100);
    const incMoney=()=>{
        setMoney(money+100);
    }
    return(
        <div>
            <PocketMoney money={money} incMoney={incMoney}/>
        </div>
    )
}