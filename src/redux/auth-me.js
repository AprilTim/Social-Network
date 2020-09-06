import {AuthAPI} from "../API/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'SET-USER-DATA';


let initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export const setUserData = (id,email,login,isAuth) => ({type: SET_USER_DATA, payload:{id,email,login,isAuth}})

export const getAuthThunk = () => {
    return (dispatch) => {
        return AuthAPI.getAuth().then(response => {
            if(response.data.resultCode === 0) {
                let {id,email,login} = response.data.data
                dispatch(setUserData(id,email,login,true))
            }
            })
    }
}

export const login = (email,password,rememberMe) => {
    return (dispatch) => {
        AuthAPI.login(email,password,rememberMe).then(response => {
            if(response.data.resultCode === 0) {
             dispatch(getAuthThunk())
            }else {
                let messages = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
                dispatch(stopSubmit("login",{_error:messages}))
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        AuthAPI.logout().then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setUserData(null,null,null,false))
            }
        })
    }
}
export default authReducer;