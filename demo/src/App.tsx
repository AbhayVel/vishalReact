import React, { useState } from 'react';
import logo from './logo.svg';
import './assets/css/bootstrap.min.css';
import './assets/css/paper-dashboard.css';
import './assets/demo/demo.css'
import Header from './components/header/Header';
import Home from './components/home/Home';
import Topic from './components/topic/Topic';
import BasePage from './components/basePage/BasePage';

const App = () => {

    return (
        <BasePage >
                   <Topic />
        </BasePage>
        )   
}



export default App;
