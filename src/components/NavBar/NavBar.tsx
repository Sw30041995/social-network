import React from 'react'
import s from './NavBar.module.css'
import {Link} from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className={s.sidebar}>
            <ul>
                <li><Link to="profile">Профиль</Link></li>
                <li><Link to="users">Друзья</Link></li>
                <li><Link to="dialogs">Сообщения</Link></li>
                <li><Link to="music">Музыка</Link></li>
                <li><Link to="news">Новости</Link></li>
                <li><Link to="settings">Настройки</Link></li>
            </ul>
        </nav>
    )
}