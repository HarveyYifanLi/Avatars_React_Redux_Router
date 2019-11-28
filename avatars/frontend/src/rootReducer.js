import {ADD_AVATAR, REMOVE_AVATAR, GET_AVATARS} from './actionCreators';

const initialState = {
    avatars: []
};

function rootReducer(state=initialState, action){
    switch(action.type){
        case GET_AVATARS:
            return {...state, avatars: action.data};
        case ADD_AVATAR:
            return {...state, avatars: [...state.avatars, action.avatar]};
        case REMOVE_AVATAR:
            let avatars = state.avatars.filter(element => element._id !== action.id);
            return {
                ...state,
                avatars
            };
        default: 
            return state; // the rootReducer is called the first time through createStore, it will thus return the initialState
    }
}

export default rootReducer;
