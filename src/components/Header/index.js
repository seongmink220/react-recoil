import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { createTodo, todos } from '../states/todos'

function Header() {
  const [value, setValue] = useState('')

  const handleInput = e => {
    setValue(e.target.value)
  }

  const setTodos = useSetRecoilState(todos)

  const handleAddTodo = e => {
    // 엔터키로 새로운 아이템을 입력한다.
    // 엔터키가 아니면 종료
    if (!(e.key === 'Enter' || e.keyCode === 13)) {
      return
    }

    const text = value.trim()

    // 공백 문자열이면 따로 추가하지 않고
    // 현재 input 창도 공백으로 만들고 종료
    if (text === '') {
      setValue('')
      return
    }

    // 현재 input창 공백으로 만들고
    // todos를 새로 추가
    setValue('')
    setTodos(todos => [
      ...todos,
      createTodo(text),
    ])
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <input className="new-todo" placeholder="What needs to be done?" value={ value } onInput={ handleInput } onKeyDown={ handleAddTodo }/>
    </header>
  )
}

export default Header