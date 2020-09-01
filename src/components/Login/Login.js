import React from "react";
import "./Login.css";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../Common/Validations";
import Input from "../Common/FormControls";
import {login, logout} from "../../redux/auth-me";
import connect from "react-redux/lib/connect/connect";
import Redirect from "react-router-dom/es/Redirect";


const maxLength30 = maxLength(30)

const LoginForm = (props) => {
    return (
        <form className="loginForm" onSubmit={props.handleSubmit}>
            <Field validate={[required, maxLength30]} name="email" component={Input} placeHolder="Email"/>
            <Field validate={[required, maxLength30]} name="password" component={Input} placeHolder="Password"/>
            <div className="checkbox"><Field name="rememberMe" component="input" type="checkbox"/>remember me</div>
            <button disabled={props.invalid} type="submit" className="btn" >I'M READY</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const Login = (props) => {
    let onSubmit = (value) => {
        /*alert(`Login: ${value.login} Password: ${value.password}`)*/
        props.login(value.email, value.password,value.rememberMe)
    }
    /*if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }*/
    return (
        <div className="loginContainer">
            <h1 className="login_header">LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.authMe.isAuth
})

export default connect(mapStateToProps,{login})(Login);