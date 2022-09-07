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

const App = () => {
    const [pageName, setPageName] = useState("topic");

    const changePageName = (eve: any) => {


        debugger;
        setPageName(eve.target.getAttribute("data-name"));
	}
    return (
        <BasePage >
            <div className="main-panel">
            <button type="button" data-name="topic"name="topic" onClick={changePageName  } >Topic</button>
            <button type="button" data-name="role" onClick={changePageName} >Role</button>
            <button type="button" data-name="subject" onClick={changePageName} >Subject</button>
                </div>
            {pageName==="topic" &&  <Topic /> }   
            {pageName === "subject" && <Subject />}
            {pageName === "role" && <Role />}
        </BasePage>
        )   
}



export default App;
