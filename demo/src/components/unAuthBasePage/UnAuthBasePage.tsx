import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../login/Login';
import Role from '../role/Role';
import SideBar from '../sideBar/SideBar';
import Subject from '../subject/Subject';
import Topic from '../topic/Topic';


const UnAuthBasePage = () => {   
   
    
    
    return (
        <div className="wrapper ">
            
            <Routes>
                <Route path="/" element={<Login />}></Route>
                
            </Routes>
        </div>
      
  );
}



export default UnAuthBasePage;
