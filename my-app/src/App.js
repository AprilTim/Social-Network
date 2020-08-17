import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import Music from "./components/Music";
import Settings from "./components/Settings";
import News from "./components/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarConteiner from "./components/Nav/NavbarConteiner";
import FindUsersContainer from "./components/FindUsers/FindUsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <NavbarConteiner store={props.store}/>
            <div className='content'>
                <Route path='/profile/:userId?' render={() => <ProfileContainer store={props.store}/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/find_users' render={() => <FindUsersContainer store={props.store}/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>

    );
}

export default App;
