import {getAuthThunk} from "./auth-me";


const SET_INITIALIZED = 'SET-INITIALIZED';


let initialState = {
    initialized: null,
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized:true,
            }
        default:
            return state
    }
}

export const setInitialized = () => ({type: SET_INITIALIZED})

export const initializeApp = () => {
    return (dispatch) => {
       let promise = dispatch(getAuthThunk())

        Promise.all([promise]).then(() => {
            dispatch(setInitialized())
        })
    }
}

export default appReducer;