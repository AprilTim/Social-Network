import {getAuth} from "../API/api";


const SET_USER_DATA = 'SET-USER-DATA';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action,
                isAuth: true
            }
        default:
            return state
    }
}

export const setUserData = (id,email,login) => ({type: SET_USER_DATA, id,email,login})

export const getAuthThunk = () => {
    return (dispatch) => {
        getAuth().then(response => {
            if(response.data.resultCode === 0) {
                let {email,id,login} = response.data.data
                dispatch(setUserData(email,id,login))
            }
        })
    }
}
export default authReducer;