import { ADD_FAV, REMOVE_FAV, FILTER, ORDEN } from "./action-types";

const initialState = {
    myFavorites: [],
    allCharacters: []
}


const reducer = (state = initialState, { type, payload }) => {
    switch( type ){
        /*
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharacters, payload],
                allCharacters: [...state.allCharacters, payload],
            }
       */
        case ADD_FAV:
            
              return { ...state, myFavorites: payload, allCharacters: payload };


/*
        case REMOVE_FAV: 
            return {
                ...state,
                allCharacters: state.allCharacters.filter(fav => fav.id !== payload)
            };
*/
       case REMOVE_FAV:
            return { ...state, allCharacters:payload ,myFavorites: payload };
            
        case FILTER:
            const allCharactersFiltered = state.allCharacters.filter(flt => flt.gender === payload)
            return {
                ...state,
                myFavorites: 
                payload === "allCharacters" 
                ?[...state.allCharacters]
                :allCharactersFiltered
            }

        case ORDEN:
            const allCharactersCopy = [...state.allCharacters]
            return {
                ...state,
                myFavorites:
                payload === "A"
                ? allCharactersCopy.sort((a, b)=> a.id - b.id)
                : allCharactersCopy.sort((a, b)=> b.id - a.id)
            }
    

        default:
            return {...state}
    }
}

export default reducer;
