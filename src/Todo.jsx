import {useState} from "react"
import {v4 as uuidv4 } from  "uuid"


export default function Todolist() {
    let [Todo, setTodo] = useState(["Sample todo"]);
    let AddToDo = (event) => {
        setTodo(event.target.value);
    }
    return(
        <>
        <h3>Add a Todo</h3> <br /><br /><br /><br /><hr/>
        <input type="text" placeholder='Add a todo' />
        <button type="submit" onClick={AddToDo}>Add</button>
        <li>{Todo}</li>
        </>
    )

     
}