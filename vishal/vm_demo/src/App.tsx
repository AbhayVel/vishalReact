import { useState } from 'react';
import './App.css';
import './components/home/Home.tsx'
import './assets/css/bootstrap.min.css';
import './assets/css/paper-dashboard.css?v=2.0.1';
import './assets/demo/demo.css';
import Topic from './components/topics/topic';
import BasePage from './components/basePage/BasePage';
import Subject from './components/subject/Subject';
import Role from './components/role/Role';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import SideBar from './components/sideBar/SideBar';
function App() {

  let [count, setCount] = useState(0);
  const btnClick = () => {
    setCount(count + 10)
  };

  let [page, setPage] = useState("Topic");
  const showPageVisibilty = (eve: any) => {
    debugger;
    setPage(eve.target.getAttribute("data-name"));
  }
  return (
    // <div>
    //   <Header></Header>  

    //   <Home name={count}></Home>
    //   <button type="button" onClick={btnClick}>Inside App  - click</button>  

    // </div>
    <BasePage>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path='/' element={<Topic />}></Route>
          <Route path='/Topic' element={<Topic />}></Route>
          <Route path='/Subject' element={<Subject />}></Route>
          <Route path='/Role' element={<Role />}></Route>
        </Routes>
      </BrowserRouter>
    </BasePage>
  );
}

export default App;
