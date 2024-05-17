function Todo(props){
    console.log("ksmLOG == Todo.js");

    const {id, done, text} = props.todo

    return (
        <li className="completed">
            <div className="view">
                <input className="toggle" type="checkbox" checked/>
                <label>Taste JavaScript</label>
                <button className="destroy"/>
            </div>
            <input className="edit" value="Create a TodoMVC template"/>
        </li>

        // <li className={ done ? 'completed' : ''}>
        //     <div className="view">
        //         <input className="toggle" type="checkbox" checked={done}/>
        //         <label>{ text }</label>
        //         <button className="destroy"></button>
        //         <input className="edit" value="Create a TodoMVC template" />
        //     </div>
        // </li>
    )
}

export default Todo;