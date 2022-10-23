import React from 'react'
import {UserType} from "../../../api/api";
import {useDispatch} from "react-redux";
import {followTC, unFollowTC} from "../../../reducers/usersReducers";
import {NavLink} from "react-router-dom";
import {getProfileData} from "../../../reducers/profileReducer";

type PropsType = {
    user: UserType
}

export const User = ({user}: PropsType) => {

    const dispatch = useDispatch()

    const followToUser = () => {
        // @ts-ignore
        dispatch(followTC(user.id))
    }
    const unFollowToUser = () => {
        // @ts-ignore
        dispatch(unFollowTC(user.id))
    }

    const goToUserPage = (userId: number) => {
        // @ts-ignore
        dispatch(getProfileData(userId))
    }

    return (
        <div>
            <div>
                <div>
                    {user.name}
                </div>
                {user.photos.small ? <img src={user.photos.small} alt="Фотография"/> :
                    <NavLink onClick={() => goToUserPage(user.id)} to={`/profile/${user.id}`}>
                        <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                             alt="Фотография"/>
                    </NavLink>}
                {user.followed ? <button onClick={unFollowToUser}>un follow</button> :
                    <button onClick={followToUser}>follow</button>}
            </div>
        </div>
    )
}

