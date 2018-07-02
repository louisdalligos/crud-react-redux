import { LIST_GAMES } from "../actions";

export default function games(state = [], action = {}) {
    switch(action.type) {
        case LIST_GAMES:
            return action.games;
        default: return state;
    }
}