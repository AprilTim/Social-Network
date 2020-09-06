export const getUsers = (state) => {
    return state.findUsersPage.users;
}

export const getTotalUsersCount = (state) => {
    return state.findUsersPage.totalItemsCount;
}

export const getCountPage = (state) => {
    return state.findUsersPage.countPage;
}

export const getCurrentPage = (state) => {
    return state.findUsersPage.currentPage;
}

export const getPageSize = (state) => {
    return state.findUsersPage.pageSize;
}

export const getIsLoading = (state) => {
    return state.findUsersPage.isLoading;
}

export const getFollowingInProgress = (state) => {
    return state.findUsersPage.followingInProgress;
}









/*followingInProgress: state.findUsersPage.followingInProgress;*/

