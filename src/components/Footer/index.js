import { useRecoilState, useSetRecoilState } from 'recoil'
import * as state from '../states/todos'

function Footer() {
  const [filterType, setFilterType] = useRecoilState(state.filterType)

  const setTodos = useSetRecoilState(state.todos)

  const handleClearCompleted = () => {
    setTodos(todos => todos.filter(todo => !todo.done))
  }

  return (
    <footer className="footer">
      <span className="todo-count"><strong>0</strong> item left</span>
      <ul className="filters">
        <li>
          <a className={ filterType === 'all' ? 'selected' : '' } href="#/" onClick={ () => setFilterType('all') }>All</a>
        </li>
        <li>
          <a className={ filterType === 'do' ? 'selected' : '' } href="#/active" onClick={ () => setFilterType('do') }>Active</a>
        </li>
        <li>
          <a className={ filterType === 'done' ? 'selected' : '' } href="#/completed" onClick={ () => setFilterType('done') }>Completed</a>
        </li>
      </ul>
      <button className="clear-completed" onClick={ handleClearCompleted }>Clear completed</button>
    </footer>
  )
}

export default Footer