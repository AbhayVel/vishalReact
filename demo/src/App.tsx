import React, { useState } from 'react';
import logo from './logo.svg';
import './assets/css/bootstrap.min.css';
import './assets/css/paper-dashboard.css';
import './assets/demo/demo.css'
import BasePage from './components/basePage/BasePage';
import { BrowserRouter} from 'react-router-dom';
import UnAuthBasePage from './components/unAuthBasePage/UnAuthBasePage';

const App = () => {
    

    const [isLogin, setLogin] = useState(true);

    const changePageName = (eve: any) => {


       
	}
    return (
        <BrowserRouter>
            {isLogin && <BasePage >

            </BasePage>}

            {!isLogin  && <UnAuthBasePage /> }
        </BrowserRouter>
        )   
}



export default App;
