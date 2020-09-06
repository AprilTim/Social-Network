import React from 'react';
import './App.scss';
import {withRouter, Route} from "react-router-dom";
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
import connect from "react-redux/lib/connect/connect";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Loading from "./components/Common/Loader/Loading";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Loading/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer store={this.props.store}/>
                <NavbarConteiner store={this.props.store}/>
                <div className='profile_img'></div>
                <div className='content'>
                    <Route path='/' exact={true} render={() => <Intro/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer store={this.props.store}/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer store={this.props.store}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/find_users' render={() => <FindUsersContainer store={this.props.store}/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/login' render={() => <Login store={this.props.store}/>}/>
                </div>
                {/*<footer className="footer"></footer>*/}
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)
