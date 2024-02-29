import { useReducer, useState } from "react"
// {
//     count:0,
// }
const reducer = (state,action)=>{
    switch(action.type){
        case 'INC':
            return { count:state.count + action.value};
        case 'DEC':
            return { count:state.count - action.value};
        default:
            return state;
    }

}
const ProductCounterWithReducer=()=>{
    const INITIAL_STATE = {
        count:0,
    }
    const [state,dispatch] = useReducer(reducer,INITIAL_STATE);
    const handleDec=()=>{
        dispatch({type:'DEC', value:2});
        
    }
    const handleInc=()=>{
        dispatch({type:'INC',value:2});
    }
    return(
        <div>
            <button onClick={handleDec}>-</button>
            {state.count}
            <button onClick={handleInc}>+</button>
        </div>
    )
}
export default ProductCounterWithReducer;