import {AuthAPI, getAuth} from "../API/api";


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
                ...action.payload,
                isAuth: true
            }
        default:
            return state
    }
}

export const setUserData = (id,email,login,isAuth) => ({type: SET_USER_DATA, payload:{id,email,login,isAuth}})

export const getAuthThunk = () => {
    return (dispatch) => {
        AuthAPI.getAuth().then(response => {
            if(response.data.resultCode === 0) {
                let {email,id,login} = response.data.data
                dispatch(setUserData(email,id,login,true))
            }
        })
    }
}

export const login = (email,password,rememberMe) => {
    return (dispatch) => {
        AuthAPI.login(email,password,rememberMe).then(response => {
            if(response.data.resultCode === 0) {
             dispatch(getAuthThunk())
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