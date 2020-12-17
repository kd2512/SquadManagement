import characters_json from '../data/characters.json';
import {ADD_CHARACTER , DELETE_CHARACTER} from '../actions/index';
import {createCharacter} from '../helpers/CreateCharacter'

function characters(state = characters_json, action){
    let characters = [];
    switch(action.type){
        case ADD_CHARACTER:
            characters = state.filter(item=> item.id !== action.id);
            return characters;

        case DELETE_CHARACTER:
            characters = [...state , createCharacter(action.id)];
            return characters;

        default:
            return state;
    }
}

export default characters;