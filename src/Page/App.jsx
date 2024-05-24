import React, { Fragment } from 'react'
import SideBar from '../Components/SideBar'
import { Route, Routes } from 'react-router-dom';
import ToDoList from '../Page/ToDoList';
import Navbar from '../Components/Navbar';

export default function App() {
    return (
        <Fragment>
            {/* 共用sidebar */}
            <SideBar />
            {/* 共用導航欄 */}
            <Navbar />
            <Routes>
                {/* 設定路由 */}
                <Route path='/ToDoList' element={<ToDoList />}></Route>
                <Route path='/Page2' element={<></>}></Route>
                <Route path='/Page3' element={<></>}></Route>
                <Route path='/Page4' element={<></>}></Route>
                <Route path='/Page5' element={<></>}></Route>
            </Routes>
        </Fragment>
    )
}
