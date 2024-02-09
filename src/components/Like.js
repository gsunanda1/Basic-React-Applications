import { useState } from "react";

const Like=()=>{
    //let count=100;
    const [count,setCount]=useState(100);
    const handleClick=()=>{
        setCount(count+1);
    }
    return(
        <div>
            <div><button onClick={handleClick}>Like</button>-{count}</div>
        </div>
    )
};
export default Like;