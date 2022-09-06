import React from 'react';
import SideBar from '../sideBar/SideBar';


const BasePage = (props: any) => {   
   
    const { children } = props;
    debugger;
    return (
        <div className="wrapper ">
            <SideBar />  
            { children }
        </div>
      
  );
}



export default BasePage;
