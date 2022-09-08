import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const SideBar = (props: any) => {   

    const navigate = useNavigate();

    const beforeSubjectClick = (eve: any)=>{
        eve.preventDefault();

        navigate("/subject");

        return false;
	}
    
    return (

        
          
        <div className="sidebar" data-color="white" data-active-color="danger">
            <div className="logo">
                <a href="https://www.creative-tim.com" className="simple-text logo-mini">
                    <div className="logo-image-small">
                        <img src="../assets/img/logo-small.png" />
                    </div>

                </a>
                <a href="https://www.creative-tim.com" className="simple-text logo-normal">
                    Creative Tim

                </a>
            </div>
            <div className="sidebar-wrapper">
                <ul className="nav">
                    <li>
                        <Link to={"/topic"}>
                            <i className="nc-icon nc-bank"></i>
                            <p>Topic</p>
                        </Link>
                    </li>
                    <li>
                        <a href="/subject" onClick={beforeSubjectClick }>
                            <i className="nc-icon nc-diamond"></i>
                            <p>subject</p>
                        </a>
                    </li>
                    <li>
                        <Link to={"/role" }>
                            <i className="nc-icon nc-pin-3"></i>
                            <p>Role</p>
                        </Link>
                    </li>
                    <li>
                        <a href="./notifications.html">
                            <i className="nc-icon nc-bell-55"></i>
                            <p>Notifications</p>
                        </a>
                    </li>
                    <li>
                        <a href="./user.html">
                            <i className="nc-icon nc-single-02"></i>
                            <p>User Profile</p>
                        </a>
                    </li>
                    <li className="active ">
                        <a href="./tables.html">
                            <i className="nc-icon nc-tile-56"></i>
                            <p>Table List</p>
                        </a>
                    </li>
                    <li>
                        <a href="./typography.html">
                            <i className="nc-icon nc-caps-small"></i>
                            <p>Typography</p>
                        </a>
                    </li>
                    <li className="active-pro">
                        <a href="./upgrade.html">
                            <i className="nc-icon nc-spaceship"></i>
                            <p>Upgrade to PRO</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

      
  );
}



export default SideBar;
