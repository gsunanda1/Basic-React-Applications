import { useState } from "react";

export const Counter=({CounterName})=>{
    const [count,setCount]=useState(0);
    const handleInc=()=>{
        if(count>=10)
        return;
        setCount(count+1);
    }
    const handleDec=()=>{
        if(count<=0)
        return;
        setCount(count-1);
    }
    return(
        <div>
            <h1>{CounterName} Counter</h1>
            <button onClick={handleInc}>+</button>
            {count}
            <button onClick={handleDec}>-</button>
        </div>
    )
}