import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';

const App = () => {

    let count = 0;
    const clickBtn = () => {
        count = count + 1;
        console.log(count);
    }
    return (
        <div>

            <button type="button" onClick={clickBtn}  >Click</button>
            <Header />
            <Home count={count }></Home>
            <Home count={count}> </Home>
      </div>
    
  );
}



export default App;
