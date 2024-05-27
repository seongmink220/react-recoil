import { atom, selector } from 'recoil'
import {createTodo} from "./todos";

let uniqId = 0;

export const createCustom = text => ({
    id : ++uniqId,
    done: false,
    text
})

export const customAtom = atom({
    key : "customAtom",
    default :
        [
        createCustom('react 공부하기'),
    ]
})