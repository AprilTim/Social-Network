import {userAPI} from "../API/api";

let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_USERS = 'SER-USERS'
let SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
let SET_TOTAL_ITEMS_COUNT = 'SET-TOTAL-ITEMS-COUNT'
let TOGGLE_IS_LOADER = 'TOGGLE-IS-LOADER'
let TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'
let FIND_USER = 'FIND_USER'

let initialState = {
    users: [],
    countPage: 16,
    totalItemsCount: 0,
    currentPage: 1,
    isLoading: false,
    followingInProgress: [],
}

const fineUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            //return {...state,users: [...state.users]}
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_ITEMS_COUNT:
            return {...state, totalItemsCount: action.totalItemsCount}
        case TOGGLE_IS_LOADER:
            return {...state, isLoading: action.isLoading}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.isLoading ?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        case FIND_USER:
            debugger
            return {
                ...state,
                users: state.users.filter((n) => n.name.toLowerCase().includes(action.search.toLowerCase()))
            }
        default:
            return state;
    }

}

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalCountPage = (totalItemsCount) => ({type: SET_TOTAL_ITEMS_COUNT, totalItemsCount})
export const toggleIsLoader = (isLoading) => ({type: TOGGLE_IS_LOADER, isLoading})
export const toggleIsFollowing = (isLoading, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isLoading, userId})
export const searchUser = (search) => ({type:FIND_USER, search})

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsLoader(true))

        userAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsLoader(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalCountPage(data.totalCount))
            })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowing(true, userId))
        userAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleIsFollowing(false, userId))
            })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowing(true, userId))
        userAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleIsFollowing(false, userId))
            })
    }
}

export default fineUsersReducer;