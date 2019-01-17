import { LOGGED_IN, LOGGED_OUT } from "./ActionTypes";

const initialState = {
    loggedIn: false,
    email: null
}

export default function Reducer(state = initialState, acitons) {
    switch (acitons.type) {
        case LOGGED_IN:
            return {
                ...state,
                loggedIn: true,
                email: acitons.email
            }
        case LOGGED_OUT:
            return {
                ...state,
                loggedIn: false,
                email: null
            }
        default:
            return state;
    }
}