import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalCountPage,
    toggleIsLoader
} from "../../redux/findUsers-reducer";
import * as axios from "axios";
import FindUsers from "./FindUsers";
import Loading from "./Loading";

class FindUsersAPI extends React.Component {
    componentDidMount() {
        this.props.toggleIsLoader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.findUsersPage.currentPage}&count=${this.props.findUsersPage.pageSize}`)
            .then(response => {
                this.props.toggleIsLoader(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCountPage(response.data.totalCount)
            })
    }

    onChangeCurrentPage = (pageNum) => {
        this.props.toggleIsLoader(true)
        this.props.setCurrentPage(pageNum)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.findUsersPage.countPage}`)
            .then(response => {
                this.props.toggleIsLoader(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {


        return <>
            { this.props.findUsersPage.isLoading ? <Loading/>:
            <FindUsers findUsersPage={this.props.findUsersPage}
                       onChangeCurrentPage={this.onChangeCurrentPage}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}/>}
        </>
    }


}

let mapStateToProps = (state) => {
    return {
        findUsersPage: state.findUsersPage
    }
}

/*let mapDispacthToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalCountPage: (totalCount) => {
            dispatch(totalCountAC(totalCount))
        },
        toggleIsLoader: (item) => {
            dispatch(toggleIsLoaderAC(item))
        }
    }
}*/

const FindUsersContainer = connect(mapStateToProps, {follow,unfollow,setUsers,setCurrentPage,setTotalCountPage,toggleIsLoader})(FindUsersAPI)

export default FindUsersContainer;