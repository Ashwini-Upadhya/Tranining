import {useState} from "react"


export default function Todolist() {
    let [Todo, setTodo] = useState([{text: "Sample todo", isDone: false}]);
    let [newTodo, setnewTodo] = useState("");
    let AddToDo = () => {
        event.preventDefault();
        if (newTodo.trim() !== ""){
            setTodo([...Todo,{ text: newTodo, isDone:false}]);
            setnewTodo("");
        }
    }
    let markDone = (index) => {
         let updateTodo = [...Todo];
         updateTodo[index].isDone = !updateTodo[index].isDone;
         setTodo(updateTodo);
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
            <li key={index} style={{textDecoration: items.isDone ? 'line-through': 'none'}}>
                {items.text} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" onClick={()=> markDone(index)}>Done</button>
            </li>
        ))}
        </ul>
        </>
    )

     
}