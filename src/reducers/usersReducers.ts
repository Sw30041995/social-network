import {api, UserType} from "../api/api";
import {Dispatch} from "redux";

type ActionType = SetUsersType | SetUsersCountType | SetCurrentPageType | FollowType | UnFollowType | SetLoadingType

const initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    currentPage: 1,
    usersCount: 0,
    isLoading: false
}

type InitialStateType = {
    users: UserType[]
    pageSize: number
    currentPage: number
    usersCount: number
    isLoading: boolean
}

export const usersReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "SET-USERS": {
            return {...state, users: [...action.users]}
        }
        case "SET-USERS-COUNT": {
            return {...state, usersCount: action.usersCount}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "FOLLOW": {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        }
        case "UN-FOLLOW": {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        }
        case "SET-LOADING": {
            return {...state, isLoading: action.isLoading}
        }
        default: {
            return state
        }
    }
}

type SetUsersType = ReturnType<typeof setUsers>
type SetUsersCountType = ReturnType<typeof setUsersCount>
type SetCurrentPageType = ReturnType<typeof setCurrentPage>
type FollowType = ReturnType<typeof follow>
type UnFollowType = ReturnType<typeof unFollow>
type SetLoadingType = ReturnType<typeof setLoading>

export const setUsers = (users: UserType[]) => {
    return {type: 'SET-USERS', users} as const
}
export const setUsersCount = (usersCount: number) => {
    return {type: 'SET-USERS-COUNT', usersCount} as const
}
export const setCurrentPage = (currentPage: number) => {
    return {type: 'SET-CURRENT-PAGE', currentPage} as const
}
export const follow = (userId: number) => {
    return {type: 'FOLLOW', userId} as const
}
export const unFollow = (userId: number) => {
    return {type: 'UN-FOLLOW', userId} as const
}
export const setLoading = (isLoading: boolean) => {
    return {type: 'SET-LOADING', isLoading} as const
}


export const getUsers = () => (dispatch: Dispatch) => {
    dispatch(setLoading(true))
    api.getUsers()
        .then(res => {
            dispatch(setUsers(res.data.items))
            dispatch(setUsersCount(res.data.totalCount))
            dispatch(setLoading(false))
        })
}

export const getCurrentPage = (currentPage: number) => (dispatch: Dispatch) => {
    dispatch(setLoading(true))
    api.getNextUsers(currentPage)
        .then((res) => {
            dispatch(setCurrentPage(currentPage))
            dispatch(setUsers(res.data.items))
            dispatch(setLoading(false))
        })
}

export const followTC = (userId: number) => (dispatch: Dispatch) => {
    api.followToUser(userId)
        .then(() => {
            dispatch(follow(userId))
        })
}

export const unFollowTC = (userId: number) => (dispatch: Dispatch) => {
    api.unFollowToUser(userId)
        .then(() => {
            dispatch(unFollow(userId))
        })
}