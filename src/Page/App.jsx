import React, { Fragment } from 'react'
import SideBar from '../Components/SideBar'
import { Route, Routes } from 'react-router-dom';
import ToDoList from '../Page/ToDoList';
import Navbar from '../Components/Navbar';
import { Navigate } from 'react-router-dom';

export default function App() {
    return (
        <Fragment>
            {/* 共用sidebar */}
            <SideBar />
            {/* 共用導航欄 */}
            <Navbar />
            <Routes>
                {/* 當初使載入 重定向到ToDoList */}
                <Route path="/" element={<Navigate to="/ToDoList" />} />
                {/* 設定路由 */}
                <Route path='/ToDoList' element={<ToDoList />}></Route>
                <Route path='/Page2' element={<></>}></Route>
                <Route path='/Page3' element={<></>}></Route>
                <Route path='/Page4' element={<></>}></Route>
                <Route path='/Page5' element={<></>}></Route>
                {/* 匹配到未定義的路徑時，自動重定向 */}
                <Route path="*" element={<Navigate to="/" />}/>
            </Routes>
        </Fragment>
    )
}
