import { useCallback, useEffect, useMemo, useState } from "react";

const TodoList = () => {
    const defaultList = [...Array(10)].map((item,idx)=>({title: `Item ${idx}`, id: idx+1, completed: false}));
    const [list, setList] = useState(defaultList);
    const [newItem, setNewItem] = useState('');

    // useMemo is used to cache the result of calculation between rerenders
    const completedCount = useMemo(
        ()=>
        list.filter((item)=> {
            console.log('completed count');
            return item.completed;
        }).length,
        [list]
    );

    const pendingCount = useMemo(
        ()=>
        list.filter((item)=> {
            console.log('Pending count');
            return !item.completed;
        }).length,
        [list]
    );

    // Here handleNewItemChange is redeclaring again & again inside ToDoList function
    const handleNewItemChange = useCallback((e) => {
        // console.log(e.target.value);
        //console.log('Before > ', newItem);
        setNewItem(e.target.value); // async update
        //console.log('After > ', newItem);
    },[]);

    useEffect(()=>{
        console.log('Rerender');
    });

    const handleButtonClick = (e) => {
        // I want to know the value inside input text box
        // console.log(newItem);
        // add the new item in list
        setNewItem('');
        const newList = [{
            title: newItem,
            id: Math.random()
        }, ...list];
        setList(newList);
        
    }

    return (
        <div className="todoWrapper">
            <h2>Todo List</h2>
            <div>
                <span>Completed:{completedCount}</span>
                <span>Pending:{pendingCount}</span>
            </div>
            <div>
                <input type="text" placeholder="Add Item" value={newItem} onChange={handleNewItemChange} />
                <button onClick={handleButtonClick}>Add</button>
            </div>
            <ul>
                {
                    list.map(item => {
                        return (<li key={item.id} className={item.completed ? 'completed' : ''}>{item.title}</li>);
                    })   
                }
                {/* {renderList()} */}
            </ul>
        </div>
    )
}

export default TodoList;