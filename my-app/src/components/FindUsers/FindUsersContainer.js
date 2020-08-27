import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setCurrentPage,
    setTotalCountPage,
    toggleIsLoader, toggleIsFollowing, getUsersThunkCreator
} from "../../redux/findUsers-reducer";
import FindUsers from "./FindUsers";
import Loading from "./Loading";

class FindUsersAPI extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onChangeCurrentPage = (pageNum) => {
        this.props.toggleIsLoader(true)
        this.props.setCurrentPage(pageNum)
        this.props.getUsersThunkCreator(pageNum,this.props.pageSize)
    }

    render() {
        return <>
            { this.props.findUsersPage.isLoading ? <Loading/>:
            <FindUsers findUsersPage={this.props.findUsersPage}
                       onChangeCurrentPage={this.onChangeCurrentPage}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                       followingInProgress={this.props.findUsersPage.followingInProgress}/>}
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        findUsersPage: state.findUsersPage,
        currentPage: state.findUsersPage.currentPage,
        pageSize: state.findUsersPage.pageSize
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

const FindUsersContainer = connect(mapStateToProps, {follow,unfollow,
    setCurrentPage,
    setTotalCountPage,toggleIsLoader,
    toggleIsFollowing,getUsersThunkCreator})(FindUsersAPI)

export default FindUsersContainer;