import React from 'react';
import s from "./Dalog.module.css";
import {NavLink} from "react-router-dom";

type PropsType = {
    message: string
    name: string
    id: number
}

export const Dealog = (props: PropsType) => {

    return (
        <div className={s.messagesBlock}>
            <div>
                <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="Фотография"/>
                <NavLink to={props.id.toString()}>{props.name}</NavLink>
            </div>
            <p>{props.message}</p>
        </div>
    )
}

