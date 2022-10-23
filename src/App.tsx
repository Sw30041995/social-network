import React from 'react'
import './App.css'
import {NavBar} from "./components/NavBar/NavBar"
import {Profile} from "./components/Profile/Profile"
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import {Dialogs} from "./components/Messages/Dialogs";
import {Users} from "./components/Users/Users";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";

function App() {

    return (
        <div className='padd'>
            <Header/>
            <div className='main'>
                <NavBar/>
                <Routes>
                    <Route path='profile' element={<Profile/>}/>
                    <Route path='profile/:userId' element={<Profile/>}/>
                    <Route path='users' element={<Users/>}/>
                    <Route path='dialogs' element={<Dialogs/>}/>
                    <Route path='music' element={<Music/>}/>
                    <Route path='news' element={<News/>}/>
                    <Route path='settings' element={<Settings/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}

export default App
