import React, {useEffect} from 'react'
import s from "./ProfileInfo.module.css";
import {getProfileData} from "../../../reducers/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../store/store";
import {ProfileType} from "../../../api/api";
import {CircularProgress} from "@mui/material";
import {useParams} from 'react-router-dom';

export const ProfileInfo = () => {

    let {userId} = useParams()
    console.log(userId)

    const dispatch = useDispatch()
    const profileData = useSelector<AppStateType, ProfileType | null>(state => state.profilePage.profile)

    if (userId === undefined) userId = '2'

    useEffect(() => {
        // @ts-ignore
        dispatch(getProfileData(userId))
    }, [userId])

    if (!profileData) {
        return <CircularProgress color="secondary"/>
    }

    return (
        <div>
            <h3 className={s.fullName}>{profileData.fullName}</h3>
            <div className={s.profileInfo}>
                <div>
                    <img src={profileData.photos.large} alt="Фотография"/>
                </div>
                <div>
                    <p>Обо мне: {profileData.aboutMe}</p>
                    <p>Facebook: {profileData.contacts.facebook}</p>
                    <p>Vk: {profileData.contacts.vk}</p>
                    {profileData.contacts.instagram && <p>Instagram:</p>}
                    <p>В поиске работы: {profileData.lookingForAJob ? 'Да' : 'Нет'}</p>
                </div>
            </div>
        </div>
    )
}