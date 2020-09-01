import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Music from "./components/Music";
import Settings from "./components/Settings";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarConteiner from "./components/Nav/NavbarConteiner";
import FindUsersContainer from "./components/FindUsers/FindUsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Intro from "./components/Intro/Intro";

const App = (props) => {

    return (
        <div className='app-wrapper'>
            <HeaderContainer store={props.store}/>
            <NavbarConteiner store={props.store}/>
            <div className='profile_img'></div>
            <div className='content'>
                <Route path='/' exact={true} render={() => <Intro/>}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer store={props.store}/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/find_users' render={() => <FindUsersContainer store={props.store}/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/login' render={() => <Login store={props.store}/>}/>
            </div>
        </div>

    );
}

export default App;
