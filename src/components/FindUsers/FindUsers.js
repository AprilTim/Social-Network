import React from "react";
import './FindUsers.scss'
import User from "./User";
import Pagination from "../Common/Pagination/Pagination";
import {Field, reduxForm} from "redux-form";

const SearchForm = (props) => {
    return(
        <form className="search" onSubmit={props.handleSubmit}>
            <Field placeholder="Find user..." className="search_input" name="search" component="input"/>
            <button type="submit" className="btn">Search</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: "search"})(SearchForm)

const FindUsers = (props) => {

    let search = (value) => {
        debugger
        props.searchUser(value.search)
    }

    return (
        <div>
            <LoginReduxForm onSubmit={search}/>
            <div className="findUser">
                {props.users.map((el) => <User photos={el.photos}
                                              name={el.name}
                                              followed={el.followed}
                                              followingInProgress={props.followingInProgress}
                                              id={el.id}
                                              follow={props.follow}
                                              unfollow={props.unfollow}/>)
            }</div>
            <Pagination totalItemsCount={props.totalItemsCount}
                        countPage={props.countPage}
                        onChangeCurrentPage={props.onChangeCurrentPage}
                        currentPage={props.currentPage}/>
        </div>
    )
}

export default FindUsers;