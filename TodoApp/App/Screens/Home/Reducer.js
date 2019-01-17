import { DELETE_TODO, EDIT_TODO } from "./ActionTypes";
import { ADD_TODO } from "../AddNote/ActionTypes";

const initialState = {
    list: {}
}

export default function Reducer(state = initialState, actions) {
    switch (actions.type) {
        case ADD_TODO:
            return {
                ...state,
                list: {
                    ...state.list,
                    [`${actions.email}`]: state.list[`${actions.email}`] instanceof Array ? [...state.list[`${actions.email}`], [actions.note]] : [actions.note]
                }
            }
        case DELETE_TODO:
            const arr = [...state.list[`${actions.email}`]];
            arr.splice(actions.index, 1)
            return {
                ...state,
                list: {
                    ...state.list,
                    [`${actions.email}`]: arr
                }
            }
        default:
            return state;
    }
}