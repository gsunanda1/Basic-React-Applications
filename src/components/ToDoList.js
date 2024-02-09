import { useState } from "react";

const ToDoList=()=>{
    const [list,setlist]=(['Item 1','Item 2','Item 3','Item 4']);
    const [item,setNewItem]=useState('');
    const addItem=(e)=>{
        setNewItem(e.target.value);
    }
    const pushToList=()=>{
        // I want to add value inside textbox to list
        console.log(item);
        //list.push(item); - this doesnt work as it is not a state.
        setNewItem(''); // clear the textbox
        const newList=[...list,item]; // create copy and add existing and new item
        setlist(newList);
    }
    return(
        <div>
            <input type="text" placeholder="Add Item" value={item} onChange={addItem}/>
            <button onClick={pushToList}>Add</button>
            <ul>
               {
                    list.map((item) => {
                        return(<li>{item}</li>);
                    })
               }
            </ul>
        </div>
    )
}
export default ToDoList;