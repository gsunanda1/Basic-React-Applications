import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./reducer";

const ProductCounterWithRedux=()=>{
   const {count} = useSelector((state)=> state.counter);
   const dispatch = useDispatch();
    const handleInc=()=>{
        dispatch(increment(2));
        
    }
    const handleDec=()=>{
        dispatch(decrement(2));
    }
    return(
        <div>
            <button onClick={handleDec}>-</button>
            {count}
            <button onClick={handleInc}>+</button>
        </div>
    )
}
export default ProductCounterWithRedux;