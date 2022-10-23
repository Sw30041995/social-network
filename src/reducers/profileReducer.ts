import {api, ProfileType} from "../api/api";
import {Dispatch} from "redux";

type ActionType = SetProfileType

const initialState: InitialStateType = {
    profile: null
}

type InitialStateType = {
    profile: ProfileType | null
}


export const profileReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "SET-PROFILE": {
            return {...state, profile: {...action.profile}}
        }
        default: {
            return state
        }
    }
}

type SetProfileType = ReturnType<typeof setProfileData>


export const setProfileData = (profile: ProfileType) => {
    return {type: 'SET-PROFILE', profile} as const
}

export const getProfileData = (userId: number) => (dispatch: Dispatch) => {
    api.getProfile(userId)
        .then(res => {
            dispatch(setProfileData(res.data))
        })
}

