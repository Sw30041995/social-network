import React from 'react'
import profileS from '../Profile/Profile.module.css'
import {Dealog} from "./Dialog/Dealog";

export const Dialogs = () => {
    return (
        <div className={profileS.article}>
            <Dealog id={1} name='Ivan' message='hello'/>
            <Dealog id={2} name='Sergey' message='fdfsdffsd'/>
            <Dealog id={3} name='Alexey' message='adsewrghjmk'/>
        </div>
    )
}

