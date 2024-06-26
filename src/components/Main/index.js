import { useRecoilValue, useRecoilState } from 'recoil'
import * as state from '../states/todos'
import * as customState from '../states/customState'

import Todo from './Todo';
import Custom from "./custom";
import {createCustom, customAtom, filteredCustom} from "../states/customState";

function Main() {
    const submitList = useRecoilState(customAtom);

//    console.log("useRecoilValue(state.todos)==" + useRecoilValue(state.filteredTodos));
    const customLi = useRecoilValue(customState.customAtom)
    const customList = customLi.map(custom => <Custom key={custom.id} custom={custom} />)

    const filteredTodos = useRecoilValue(state.filteredTodos)
    const Todos = filteredTodos.map(todo => <Todo key={Todo.id} todo={todo} />)


    const [todos, setTodos] = useRecoilState(state.todos)
    const isAllDone = todos.every(todo => todo.done)

    const handleToggle = e => {
        const {checked} = e.target

        setTodos(todos => todos.map(todo => {
            return {
                ...todo,
                done: checked,
            }
        }))
    }
    // console.log("todos.map===" + Todo.id);


    const customButton = () => {
        console.log("customButton");

        createCustom("asdsa");
    }

    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" checked={ isAllDone } onChange={ handleToggle }/>
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">

                {Todos}
                {/*
            Todo.js <li>를 하나의 객체라고 보고 model과 비슷한 역할을 한다.
            todos.js 에서 atom으로 값을 정의하고 객체를 관리한다.
            이를 useRecoilValue로 관리하고 해당 컴포넌트에 훅을 걸어준다.
             */}
            </ul>
            {/*<button>클릭</button>*/}
            {customList}
            <button onClick={customButton}>custom</button>
        </section>
    )
}

export default Main