import React from "react";
import Header from "./Header";
import {logout} from "../../redux/auth-me";
import connect from "react-redux/lib/connect/connect";

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.authMe.isAuth,
    login: state.authMe.login,
})


export default HeaderContainer = connect(mapStateToProps,{logout})(HeaderContainer)