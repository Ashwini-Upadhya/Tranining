import {useState} from "react"


export default function Todolist() {
    let [Todo, setTodo] = useState(["Sample todo"]);
    let [newTodo, setnewTodo] = useState("");
    let AddToDo = () => {
        event.preventDefault();
        if (newTodo.trim() !== ""){
            setTodo([...Todo, newTodo]);
            setnewTodo("");
        }
    }
    return(
        <>
        <h3>Add a Todo</h3> <br /><br /><br /><br /><hr/>
        <form onSubmit={AddToDo}>
        <input  type="text"
                id="input"
                placeholder="Add a todo" 
                value={newTodo} 
                onChange={(e) => setnewTodo(e.target.value)} />
        <button type="submit" onClick={AddToDo}>Add</button>
        </form>
        <ul>
        {Todo.map((items,index) => (
            <li key={index}>{items}</li>
        ))}
        </ul>
        </>
    )

     
}