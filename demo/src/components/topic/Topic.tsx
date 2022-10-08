import { useEffect, useState } from 'react';
import logo from '../../assets/img/logo-small.png';
import QdnTable, { QdnTd, TdContext } from '../../library/thead/QdnTable';
import QdnThead, { QdnTh } from '../../library/thead/Thead';
import SubjectMaster from '../../master-component/subject/SubjectMaster';
import { TopicService } from '../../services/TopicServices';
import { getValue } from '../../util/Util';


const Topic = () => {
    const subjectMaster = [
        {
            subjectId: 1,
            subjectName: "MVC"
        },
        {
            subjectId: 2,
            subjectName: "Angular"
        },
        {
            subjectId: 3,
            subjectName: "React"
        }
    ]
    const topicService = new TopicService();
    const filterConfig = {
        idGte: '',
        idLte: '',
        type:'',
        answer:'',
        question:''
    }
    let data: Array<any> = [];

    
    const tableConfig = {
     isFilter: true,
     columnConfig:   [
        {
            id: 1,
            columnName: "id",
            columnType: "num",
             displayName: "Id",
             isDefaultSort: true,
             orderBy: "asc",
            isSortable: true,
             className: '',
             filter: [{
                 fid: 1,
                 columnName: 'idGte',
                 columnType: "GteNum"
             },
                 {
                     fid: 2,
                     columnName: 'idLte',
                     columnType: "LteNum"
                 }


            ]

         },
        {
            id: 2,
            columnName: "subjectId",
            customDisplayName: "subjectId",
            columnType: "num",
            displayName: "Subject",
            isSortable: true,
            isDefaultSort: false,
            className: '',
            filter: [{
                fid: 12,
                columnName: 'subjectId',
                columnType: "num",
                customFilter: (e: any,value: any ) => {
                    const subjectIdNameA = getValue(subjectMaster, "subjectId", "subjectName", e.subjectId, "");

                    return subjectIdNameA.toLowerCase().indexOf(value.toLowerCase()) > -1;
				}
            }
            ],
            customSort: (a: any, b: any, orderBy: any) => {
                const subjectIdNameA = getValue(subjectMaster, "subjectId", "subjectName", a.subjectId, "");
                const subjectIdNameB = getValue(subjectMaster, "subjectId", "subjectName", b.subjectId, "");
                return subjectIdNameA > subjectIdNameB ? orderBy : orderBy * -1;
            },
           
        },
        {
            id: 3,
            columnName: "type",
            columnType: "cistr",
            displayName: "Type",
            isSortable: true,
            className: '',
            filter: [{
                fid: 3,
                columnName: 'type',
                columnType: "cistr"
            }
            ]
        },
        {
            id: 4,
            columnName: "question",
            columnType: "cistr",
            displayName: "Question",
            customDisplaySort: "question",
            isSortable: true,
            className: 'text-right',
            filter: [{
                fid: 4,
                columnName: 'question',
                columnType: "cistr"
            }
            ]
        },
        {
            id: 5,
            columnName: "answer",
            columnType: "cistr",
            displayName: "Answer",
            customDisplaySort: "answer",
            isSortable: false,
            className: 'text-right',
            filter: [{
                fid: 5,
                columnName: 'answer',
                columnType: "cistr"
            }
            ]
        }

        ,{
             id: 10,
             columnName: "id",
            columnType: "num",
            customDisplayName: "dummy",
             displayName: "Dummy  Header",
             isSortable: true,
             className: '',
             filter: [


             ]

         },

        ]
        }

    const sortData = (a: any, b: any, c: any) => {


    }

    const path = "/assets/img/logo-small.png";
    // const [config, setConfig] = useState({ data: data, orderBy: "asc"   } );
    const [config, setConfig] = useState({ data, orderBy: "asc", filterConfig: filterConfig });

    useEffect(() => {
        //api call  1
        //api call 2
        //Merge 

        setTimeout(() => {

            data = topicService.getAll();
            
            setConfig({ data, orderBy: "asc", filterConfig: filterConfig })
         }, 5000);

        return () => {

		}
	},[])

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
                                Id  <input type="text" />
                                <br />
                                Subject  <input type="text" />
                                <div className="table-responsive">
                                    <QdnTable tableConfig={tableConfig} config={config} setConfig={setConfig} data={data}>
                                        <QdnTh name="question">
                                            <p className="red"> data Question</p>
                                        </QdnTh>
                                        <QdnTh name="answer">
                                            <span> data Answer</span>
                                        </QdnTh>
                                        <QdnTd name="subjectId">
                                            <TdContext.Consumer>
                                                {
                                                    (value: any) => {
                                                        return (
                                                            <div>
                                                                <SubjectMaster  id={value.subjectId } defaultValue="na" />
                                                            </div>
                                                            )
													}
												}
                                            </TdContext.Consumer>
                                        </QdnTd>

                                        <QdnTd name="dummy">
                                            <TdContext.Consumer>
                                                {
                                                    (value: any) => {
                                                        return (
                                                            <div>
                                                                 
                                                            </div>
                                                        )
                                                    }
                                                }
                                            </TdContext.Consumer>
                                        </QdnTd>
                                     </QdnTable>

                                      
                                    <img src={logo} alt="logo" />

                                    <img src={path} alt="logo" />
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
                                � <script>
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
