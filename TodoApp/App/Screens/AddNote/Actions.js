import { ADD_TODO } from "./ActionTypes";

export function addNote(note, email) {
    return {
        type: ADD_TODO,
        note, email
    }
}