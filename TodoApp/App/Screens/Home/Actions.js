import { DELETE_TODO } from "./ActionTypes";

export function deleteNote(index, email) {
    return {
        type: DELETE_TODO,
        index, email
    }
}