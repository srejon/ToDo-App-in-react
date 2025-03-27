import { useState } from "react";

const ToDoApp = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState(" ");
    const addItems = () => {
        if(inputValue.trim() !== ""){
            setItems([...items, inputValue]);
            setInputValue('')
        }
    }
    return(
        <>
        <div className="container">
        <h1>TODO APP</h1>
        <input type="text" placeholder="Enter your task" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button onClick={addItems}>Add</button>
        </div>
        </>
    )
}

export default ToDoApp;