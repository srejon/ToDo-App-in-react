import { useState } from "react";

const ToDoApp = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState(" ");
    const addItems = () => {
        if(inputValue.trim() !== ""){
            setItems([...items, inputValue]);
            setInputValue('')
        }
    };

    const removeItems = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };
    const handleKeyPress = (e) => {
        if(e.key === "Enter"){
            addItems();
        }
    };
    return(
        <div className="container">
        <h1>TODO APP</h1>
        <div className="todo-input">
        <input type="text" placeholder="Enter your task" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}/>
        <button onClick={addItems}>Add</button>
        </div>
        <ul className="todo-list">
            {items.map((item, index) => (
                <li key={index} className="todo-item">
                    <span>{item}</span>
                    <button onClick={()=> removeItems(index)}>Delete</button>
                </li>
            ))}
        </ul>
        </div>
    )
}

export default ToDoApp;