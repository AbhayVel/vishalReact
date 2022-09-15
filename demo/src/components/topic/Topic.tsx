import React, { useState } from 'react';
import QdnThead, { QdnTh } from '../../library/thead/Thead';
import SideBar from '../sideBar/SideBar';


const Topic = () => {   

    const data = [
        {
            id: 1,
            subjectId: 1,
            type:"Question",
            question: "What is react",
            answer:"React is a UI rendring library available for javascript."
        },
        {
            id: 2,
            subjectId: 2,
            type: "Question",
            question: "What is Angular",
            answer: "Angular is a UI framework for javascript."
        },
        {
            id: 3,
            subjectId: 3,
            type: "Topic",
            question: "What is Angular",
            answer: "Angular is a UI framework for javascript."
        },
         

    ]

    const tableConfig = [
        {
            id: 1,
            columnName: "id",
            columnType: "num",
            displayName: "Id",
            isSortable: true,
            className:''
        },
        {
            id: 2,
            columnName: "subjectId",
            columnType: "num",
            displayName: "Subject",
            isSortable: true,
            className: ''
        },
        {
            id: 3,
            columnName: "type",
            columnType: "cistr",
            displayName: "Type",
            isSortable: true,
            className: ''
        },
        {
            id: 4,
            columnName: "question",
            columnType: "cistr",
            displayName: "Question",
            customDisplaySort: "question",
            isSortable: true,
            className: 'text-right'
        },
        {
            id: 5,
            columnName: "answer",
            columnType: "cistr",
            displayName: "Answer",
            customDisplaySort: "answer",
            isSortable: false,
            className: 'text-right'
        }
    
    ]

    const sortData = (a: any, b: any, c: any) => {
        debugger;

	}
    // const [config, setConfig] = useState({ data: data, orderBy: "asc"   } );
    const [config, setConfig] = useState({ data, orderBy: "asc"   } );
    return (        
            <div className="main-panel">
              
                <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
                    <div className="container-fluid">
                        <div className="navbar-wrapper">
                            <div className="navbar-toggle">
                                <button type="button" className="navbar-toggler">
                                    <span className="navbar-toggler-bar bar1"></span>
                                    <span className="navbar-toggler-bar bar2"></span>
                                    <span className="navbar-toggler-bar bar3"></span>
                                </button>
                            </div>
                            <a className="navbar-brand" href="javascript:;">Paper Dashboard 2</a>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-bar navbar-kebab"></span>
                            <span className="navbar-toggler-bar navbar-kebab"></span>
                            <span className="navbar-toggler-bar navbar-kebab"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navigation">
                            <form>
                                <div className="input-group no-border">
                                    <input type="text" value="" className="form-control" placeholder="Search..." />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <i className="nc-icon nc-zoom-split"></i>
                                            </div>
                                        </div>
                                </div>
                            </form>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link btn-magnify" href="javascript:;">
                                        <i className="nc-icon nc-layout-11"></i>
                                        <p>
                                            <span className="d-lg-none d-md-block">Stats</span>
                                        </p>
                                    </a>
                                </li>
                                <li className="nav-item btn-rotate dropdown">
                                    <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="nc-icon nc-bell-55"></i>
                                        <p>
                                            <span className="d-lg-none d-md-block">Some Actions</span>
                                        </p>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link btn-rotate" href="javascript:;">
                                        <i className="nc-icon nc-settings-gear-65"></i>
                                        <p>
                                            <span className="d-lg-none d-md-block">Account</span>
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                
                <div className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Topic</h4>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                    <table className="table">

                                        <QdnThead tableConfig={tableConfig} config={config} setConfig={setConfig} > 
                                            <QdnTh name="question">
                                                <p className="red"> data Question</p>
                                            </QdnTh>
                                            <QdnTh name="answer">
                                                <span> data Answer</span>
                                             </QdnTh>
                                        </QdnThead>
                                        <tbody>

                                            {
                                                config.data.map((e: any) => {
                                                    return (
                                                        <tr key={e.id}>
                                                            <td>
                                                                {e.id}
                                                            </td>
                                                            <td>
                                                                {e.subjectId}
                                                            </td>
                                                            <td>
                                                                {e.type}
                                                            </td>
                                                            <td className="text-right">
                                                                {e.question}
                                                            </td>
                                                            <td className="text-right">
                                                                {e.answer }
                                                            </td>
                                                        </tr>     
                                                        
                                                        )
												})
											}

                                             

                                     
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
                <footer className="footer footer-black  footer-white ">
                    <div className="container-fluid">
                        <div className="row">
                            <nav className="footer-nav">
                                <ul>
                                    <li><a href="https://www.creative-tim.com" target="_blank">Creative Tim</a></li>
                                    <li><a href="https://www.creative-tim.com/blog" target="_blank">Blog</a></li>
                                    <li><a href="https://www.creative-tim.com/license" target="_blank">Licenses</a></li>
                                </ul>
                            </nav>
                            <div className="credits ml-auto">
                                <span className="copyright">
                                    © <script>
                                        document.write(new Date().getFullYear())
                                    </script>, made with <i className="fa fa-heart heart"></i> by Creative Tim
                                </span>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
  );
}



export default Topic;
