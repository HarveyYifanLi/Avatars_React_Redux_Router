export const ADD_AVATAR = "ADD_AVATAR";
export const REMOVE_AVATAR = "REMOVE_AVATAR";
export const GET_AVATARS = "GET_AVATARS";

const url = "https://9e6367fb61bd4f4b84cb93cba1221909.vfs.cloud9.us-east-2.amazonaws.com:3001/api/avatars/";

function handleAvatars(data){
    return {
        type: GET_AVATARS,
        data
    };
}

function handleAdd(avatar){
    return {
        type: ADD_AVATAR,
        avatar
    };
}

function handleRemove(id){
    return {
        type: REMOVE_AVATAR,
        id: id
    };
}

export function getAvatars(){
    return dispatch => {
        return //fetch("http://localhost:3001/api/avatars")
              fetch(url)
              .then(res => res.json())
              .then(data => dispatch(handleAvatars(data)))
              .catch(err => console.log("Something went wrong!", err));
    };
}

export function addAvatar(name){
    return dispatch => {
        return fetch(url, {
                method: "POST",
                headers: new Headers({
                    "Content-Type": "application/json"
                }),
                body: JSON.stringify({name})
            })
              .then(res => res.json())
              .then(data => dispatch(handleAdd(data)))
              .catch(err => console.log("Something went wrong!", err));
    };
}

export function removeAvatar(id){
    return dispatch => {
        return fetch(url+id, {
                method: "DELETE"
            })
              .then(res => res.json())
              .then(data => dispatch(handleRemove(id)))
              .catch(err => console.log("Something went wrong!", err));
    };
}
