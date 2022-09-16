import { Route, Routes } from 'react-router-dom';
import Login from '../login/Login';

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
