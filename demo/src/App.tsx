import React, { useState } from 'react';
import logo from './logo.svg';
import './assets/css/bootstrap.min.css';
import './assets/css/paper-dashboard.css';
import './assets/demo/demo.css'
import Header from './components/header/Header';
import Home from './components/home/Home';

const App = () => {

    
    let [count , setCount] = useState(0);
     
    const clickBtn = () => {
        //count=count+1;
        setCount(count + 1);
       
        console.log(count);
    }
    return (
        <div>
            { count }

            <button type="button" onClick={clickBtn}  >Click</button>
            <Header />
            <Home count={count }></Home>
            <Home count={count} data="a"> </Home>
      </div>
    
  );
}



export default App;
