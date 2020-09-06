import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setCurrentPage,
    setTotalCountPage,
    toggleIsLoader, toggleIsFollowing, getUsersThunkCreator, searchUser
} from "../../redux/findUsers-reducer";
import FindUsers from "./FindUsers";
import Loading from "../Common/Loader/Loading";
import {
    getCountPage, getCurrentPage,
    getFollowingInProgress,
    getIsLoading, getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/selectors/FindUsersSelectors";

class FindUsersAPI extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onChangeCurrentPage = (pageNum) => {
        this.props.toggleIsLoader(true)
        this.props.setCurrentPage(pageNum)
        this.props.getUsersThunkCreator(pageNum, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isLoading ? <Loading/> :
                <FindUsers {...this.props}
                           onChangeCurrentPage={this.onChangeCurrentPage}
                    /*users={this.props.users}
                    onChangeCurrentPage={this.onChangeCurrentPage}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    followingInProgress={this.props.followingInProgress}
                    totalCountUser={this.props.totalCountUser}
                    countPage={this.props.countPage}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}*//>}
        </>
    }
}

/*let mapStateToProps = (state) => {
    return {
        findUsersPage: state.findUsersPage,
        currentPage: state.findUsersPage.currentPage,
        pageSize: state.findUsersPage.pageSize
    }
}*/

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

let mapStateToProps = (state) => {
    return {
        followingInProgress: getFollowingInProgress(state),
        isLoading: getIsLoading(state),
        users: getUsers(state),
        totalItemsCount: getTotalUsersCount(state),
        countPage: getCountPage(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state)
    }
}

const FindUsersContainer = connect(mapStateToProps, {
    follow, unfollow,
    setCurrentPage,
    setTotalCountPage, toggleIsLoader,
    toggleIsFollowing, getUsersThunkCreator,searchUser
})(FindUsersAPI)

export default FindUsersContainer;