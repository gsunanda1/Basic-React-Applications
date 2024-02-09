import { useState } from "react";

export const RandomName=()=>{
    const [randomId,setRandomId] = useState("1234");
    const [randomName,setRandomName] = useState("John");
    const genrateRandom=()=>{
        const newId = Math.random();
        setRandomId(newId);
        const randomName=Math.random();
        setRandomName(randomName);
    }
    return(
        <div onClick={genrateRandom}>
            <span>Id:{randomId}</span>
            <span>Name:{randomName}</span>
        </div>
    )
}