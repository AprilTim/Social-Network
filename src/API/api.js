import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'api-key': 'bc3643db-c921-4413-9259-9d9c933351b7'
    }

})

export const userAPI = {
    getUsers(currentPage, pageSize = 16) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
    },
    follow(id) {
        return instance.post(`follow/${id}`)
    }

}

export const ProfileAPI = {

    getProfile(id) {
        return instance.get(`profile/${id}`)
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
    setNewPhoto(newPhoto) {
        const formData = new FormData()
        formData.append(`image`, newPhoto)
        return instance.put(`profile/photo`, formData, {headers: {'Content-Type': 'multipart/form-data'}})
    },
    updateProfile(newProfile) {
        return instance.put(`profile`,newProfile)
    }

}

export const AuthAPI =
    {
        getAuth() {
            return instance.get(`auth/me`)
        },
        login(email,password,rememberMe=false) {
            return instance.post(`auth/login`, {email,password,rememberMe})
        },
        logout() {
            return instance.delete(`auth/login`)
        },
    }