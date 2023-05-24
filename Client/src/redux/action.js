import { ADD_FAV, REMOVE_FAV, FILTER, ORDEN,  } from './action-types';
import axios from 'axios'; 
/*
export const addFav = (character) => {
    return { type: ADD_FAV, payload: character }
};
*/
export const addFav = (character) => {
   const endpoint = `http://localhost:3001/rickandmorty/fav`;

   return async (dispatch) => {
      try { 
         const { data } = await axios.post(endpoint, character);
         return dispatch({
            type: 'ADD_FAV',
            payload: data,
         });
      } catch (error) {
         console.error(error);
      }
   }
}


// export const addFav = (character) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
    
//     return (dispatch) => {
//        axios.post(endpoint, character).then(({ data }) => {
//           return dispatch({
//              type: 'ADD_FAV',
//              payload: data,
//           });
//        });
//     };
//  };

 /*
export const removeFav = (id) => {
    return { type: REMOVE_FAV, payload: id }
}
*/
export const removeFav =  (id) => {
   const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;

   return async (dispatch) => {
      try {
         const { data } = await axios.delete(endpoint);
         return dispatch({
                     type: 'REMOVE_FAV',
                     payload: data,
                  });
      } catch (error) {
         console.error(error);
      }
   }
};

// export const removeFav = (id) => {
//    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//    return (dispatch) => {
//       axios.delete(endpoint).then(({ data }) => {
//          return dispatch({
//             type: 'REMOVE_FAV',
//             payload: data,
//       });
//       });
//    };
// };


export const filterCards = (gender) => {
    return { type: FILTER, payload: gender }
};

export const ordenCards = (a) => {
    return { type: ORDEN, payload: a }
};


