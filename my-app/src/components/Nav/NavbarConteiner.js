import React from 'react';
import {connect} from "react-redux";
import Navbar from "./Nav";


let mapStateToProps = (state) => {
    return {
        navbarPage: state.navbarPage
    }
}


const NavbarConteiner = connect(mapStateToProps)(Navbar)
export default NavbarConteiner;