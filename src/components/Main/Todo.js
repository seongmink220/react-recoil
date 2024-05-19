import { useSetRecoilState } from 'recoil'
import  { todos } from '../states/todos'

function Todo(props){
    console.log("ksmLOG == Todo.js");

    const {id, done, text} = props.todo

    const setTodos = useSetRecoilState(todos)

    const toggleTodo = checked => {
        setTodos(todos => todos.map(todo => {
            return todo.id === id
            ? { ...todo, done: checked }
            : todo
        }))
    }

    const handleToggle = e => {
        const {checked} = e.target

        toggleTodo(checked);
       }

         const handleDestroy = () => {
           setTodos(todos => todos.filter(todo => todo.id !== id))
         }

    return (
    /*
        <li className="completed">
            <div className="view">
                <input className="toggle" type="checkbox" checked/>
                <label>Taste JavaScript</label>
                <button className="destroy"/>
            </div>
            <input className="edit" value="Create a TodoMVC template"/>
        </li>
        */

        <li className={ done ? 'completed' : ''}>
            <div className="view">
                <input className="toggle" type="checkbox" checked={done} onChange={handleToggle}/>
                <label>{ text }</label>
                <button className="destroy" onClick={ handleDestroy }/>
                <input className="edit" value="Create a TodoMVC template" />
            </div>
        </li>
    )
}

export default Todo;