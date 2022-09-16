import { useState } from 'react';
import './assets/css/bootstrap.min.css';
import './assets/css/paper-dashboard.css';
import './assets/demo/demo.css'
import './App.css'
import BasePage from './components/basePage/BasePage';
import { BrowserRouter } from 'react-router-dom';
import UnAuthBasePage from './components/unAuthBasePage/UnAuthBasePage';

const App = () => {


    const [isLogin] = useState(true);
    return (
        <BrowserRouter>
            {isLogin && <BasePage />}
            {!isLogin && <UnAuthBasePage />}
        </BrowserRouter>
    )
}



export default App;
