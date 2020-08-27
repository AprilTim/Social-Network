import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import fineUsersReducer from "./findUsers-reducer";
import authReducer from "./auth-me";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbarPage: navbarReducer,
    findUsersPage: fineUsersReducer,
    authMe:authReducer,
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));
window.store = store;
export default store;