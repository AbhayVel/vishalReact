import React, { useState } from 'react';
import logo from './logo.svg';
import './assets/css/bootstrap.min.css';
import './assets/css/paper-dashboard.css';
import './assets/demo/demo.css'
import Header from './components/header/Header';
import Home from './components/home/Home';
import Topic from './components/topic/Topic';
import BasePage from './components/basePage/BasePage';
import Subject from './components/subject/Subject';
import Role from './components/role/Role';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
    const [pageName, setPageName] = useState("topic");

    const changePageName = (eve: any) => {


        debugger;
        setPageName(eve.target.getAttribute("data-name"));
	}
    return (
        <BasePage >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Topic />}></Route>
                    <Route path="/topic" element={<Topic />}></Route>
                    <Route path="/subject" element={<Subject />}></Route>
                    <Route path="/role" element={<Role />}></Route>
                </Routes>
            </BrowserRouter>
           
        </BasePage>
        )   
}



export default App;
