let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_USERS = 'SER-USERS'
let SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
let SET_TOTAL_COUNT_USER = 'SET-TOTAL-COUNT-USER'
let TOGGLE_IS_LOADER = 'TOGGLE-IS-LOADER'

let initialState = {
    users: [],
    countPage: 10,
    totalCountUser: 0,
    currentPage: 1,
    isLoading: false
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
        case SET_TOTAL_COUNT_USER:
            return {...state, totalCountUser: action.totalCountUser}
        case TOGGLE_IS_LOADER:
            return {...state, isLoading: action.isLoading}
        default:
            return state;
    }

}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalCountPage = (totalCountUser) => ({type: SET_TOTAL_COUNT_USER, totalCountUser})
export const toggleIsLoader = (isLoading) => ({type: TOGGLE_IS_LOADER, isLoading})

export default fineUsersReducer;