import React from 'react'
import s from './Post.module.css'

type PropsType = {
    message: string
    likesCount: number
}

export const Post = (props: PropsType) => {
    return (
        <div className={s.post}>
            <div>
                <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="Фотография"/>
            </div>
            <p>{props.message}</p>
            <p>👍{props.likesCount}</p>
        </div>
    )
}

