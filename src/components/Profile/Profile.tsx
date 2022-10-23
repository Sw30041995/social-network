import React from 'react'
import s from './Profile.module.css'
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
    return (
        <article className={s.article}>
            <ProfileInfo/>
            <Posts/>
        </article>
    )
}

