import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import fineUsersReducer from "./findUsers-reducer";
import authReducer from "./auth-me";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbarPage: navbarReducer,
    findUsersPage: fineUsersReducer,
    authMe:authReducer,
    app:appReducer,
    form: formReducer
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));
window.store = store;
export default store;