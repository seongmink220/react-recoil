import { atom, selector } from 'recoil'

let uniqId = 0;

export const createTodo = text => ({
    id : ++uniqId,
    done: false,
    text
})

export const todos = atom ({
    key : 'todos',
    default: [
        createTodo('react 공부하기'),
        createTodo('recoil 공부하기'),
    ],
})

export const filterType = atom({
    key: 'filterType',
    default: 'all',
})

export const filteredToods = selector({
    key : 'filteredToods',
    get : ({get}) => {
        const items = get(tood)
        const type = get(filterType)

        switch (type) {
            case 'do':
                return items.filter(todo => !todo.done)
            case 'done':
                return items.filter(todo => todo.done)
            default:
                return items
        }
    }
})

console.log("ksmLOG == todos.js");

console.log("ksmLOG == createTodo==" + createTodo('react 공부하기').id + createTodo('react 공부하기').done + createTodo('react 공부하기').text);