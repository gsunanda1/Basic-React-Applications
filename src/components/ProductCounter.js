import { useState } from "react"

const ProductCounter=()=>{
    const [count,setCount]=useState(0);
    const handleDec=()=>{
        //instead of using count directly, we use callback to update
        setCount((prevState)=> {
            if(prevState === 0)
            return 0;
            return prevState-1;
        })
    }
    const handleInc=()=>{
        setCount((prevState)=> {
            if(prevState >= 5)
            return prevState;
            return prevState-1;
        })
    }
    return(
        <div>
            <button onClick={handleDec}>-</button>
            {count}
            <button onClick={handleInc}>+</button>
        </div>
    )
}
export default ProductCounter;