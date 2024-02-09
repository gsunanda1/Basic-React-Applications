export const PocketMoney=({money,incMoney})=>{
    const handleCry=()=>{
       console.log('dont cry'); 
       incMoney();
    }
    return(
        <div>
            <div>Money - {money}</div>
            <div><button onClick={handleCry}>Cry</button></div>
        </div>
    )
}