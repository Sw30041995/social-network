import React, {ChangeEvent, useState} from 'react'
import {Post} from "./Post/Post";

export const Posts = () => {

    return (
        <div style={{textAlign: 'center'}}>
            <h4>Мои посты</h4>
            <textarea/>
            <button>Отправить</button>
            <Post likesCount={3} message='hello'/>
            <Post likesCount={15} message='my name is Ivan'/>
            <Post likesCount={33} message='yoooo'/>
        </div>
    )
}

