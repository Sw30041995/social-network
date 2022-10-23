import React, {useEffect} from 'react'
import s from '../Profile/Profile.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getCurrentPage, getUsers} from "../../reducers/usersReducers";
import {AppStateType} from "../../store/store";
import {UserType} from "../../api/api";
import {User} from "./User/User";
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';

export const Users = () => {

    const dispatch = useDispatch()
    const users = useSelector<AppStateType, UserType[]>(state => state.userPage.users)
    const usersCount = useSelector<AppStateType, number>(state => state.userPage.usersCount)
    const pageSize = useSelector<AppStateType, number>(state => state.userPage.pageSize)
    const isLoading = useSelector<AppStateType, boolean>(state => state.userPage.isLoading)

    useEffect(() => {
        // @ts-ignore
        dispatch(getUsers())
    }, [])

    const countPages = Math.ceil(usersCount / pageSize)
    const pages = []
    for (let i = 1; i <= countPages; i++) {
        pages.push(i)
    }

    const goToPage = (currentPage: number) => {
        // @ts-ignore
        dispatch(getCurrentPage(currentPage))
    }

    return (
        <div className={s.article}>

            {pages.map((p, i) => p <= 10 ? <span onClick={() => goToPage(p)} key={i}>{p} </span> : null)}
            {isLoading ? <CircularProgress color="secondary" /> : users.map(u => <User key={u.id} user={u}/>)}
        </div>
    )
}

