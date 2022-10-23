import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '47e20be3-e07c-4042-adfa-a0f1c7b542da'
    }
})

export const api = {
    getUsers() {
        return instance.get<ResponseUsersType>('users')
    },
    getNextUsers(currentPage: number) {
        return instance.get<ResponseUsersType>(`users?page=${currentPage}`)
    },
    followToUser(userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`, userId)
    },
    unFollowToUser(userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`)
    },
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`)
    },
    me() {
        return instance.get<MeResponseType>('auth/me')
    }
}

export type UserType = {
    name: string
    id: number
    photos: {
        small: null | string
        large: null | string
    }
    status: string
    followed: boolean
    uniqueUrlName: string | null
}
export type ResponseUsersType = {
    items: UserType[]
    totalCount: number
    error: null | string
}

export type ResponseType = {
    data: {}
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}

export type ProfileType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

type MeResponseType = {
    resultCode: number
    messages: string[]
    data: {
        id: number
        email: string
        login: string
    }
}