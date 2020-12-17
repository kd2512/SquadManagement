import {ADD_CHARACTER , DELETE_CHARACTER} from '../actions/index';
import {createCharacter} from '../helpers/CreateCharacter';

function heroes(state = [], action){
    let heroes =[];
    switch(action.type){
        case ADD_CHARACTER:
            heroes = [...state, createCharacter(action.id)];
            return heroes;

        case DELETE_CHARACTER:
            heroes = state.filter(item=> item.id !== action.id);
            return heroes;
        default:
            return state;

    }
}



export default heroes;