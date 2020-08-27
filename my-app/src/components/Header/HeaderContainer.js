import React from "react";
import Header from "./Header";
import {getAuthThunk, setUserData} from "../../redux/auth-me";
import connect from "react-redux/lib/connect/connect";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthThunk()
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.authMe.isAuth,
    login: state.authMe.login,
})


export default HeaderContainer = connect(mapStateToProps,{setUserData, getAuthThunk})(HeaderContainer)