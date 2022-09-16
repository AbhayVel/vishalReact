import { Route, Routes } from 'react-router-dom';
import Role from '../role/Role';
import SideBar from '../sideBar/SideBar';
import Subject from '../subject/Subject';
import Topic from '../topic/Topic';


const BasePage = () => {

    debugger;
    return (
        <div className="wrapper ">
            <SideBar />
            <Routes>
                <Route path="/" element={<Topic />}></Route>
                <Route path="/topic" element={<Topic />}></Route>
                <Route path="/subject" element={<Subject />}></Route>
                <Route path="/role" element={<Role />}></Route>
            </Routes>
        </div>

    );
}



export default BasePage;
