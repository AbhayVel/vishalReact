import { useState } from "react";
import { visitEachChild } from "typescript";
import Footer from "../footer/Footer";
import SideBar from "../sideBar/SideBar";


interface Student {
  id: number;
  firstName: string;
  lastName: string;
  city: string;
  contactNo: string;
}

interface TableHeader {
  columnId: string,
  caption: string,
  allowSorting: boolean,
  columnType?: string,
  customCaption?: String,
  image?: any
}
const CASE_SENSETIVE_STRING = "CaseSensitiveString";
const SORT_ASC = 1;
const SORT_DESC = -1;
const Topic = (props: any) => {

  let tableData: Student[] = [{ id: 101, firstName: "Vishal", lastName: "Moharikar", city: "Pune", contactNo: "9503269990" },
  { id: 102, firstName: "Ranjan", lastName: "Moharikar", city: "Pune", contactNo: "9503269991" },
  { id: 103, firstName: "Shashank", lastName: "Moharikar", city: "Pune", contactNo: "9503269992" },
  { id: 103, firstName: "sharduli", lastName: "Kulkarni", city: "Pune", contactNo: "9503269992" }];

  let tableHeader: TableHeader[] = [{ columnId: "id", caption: "ID", allowSorting: true, customCaption: "", image: "" },
  { columnId: "firstName", caption: "First Name", allowSorting: true, columnType: CASE_SENSETIVE_STRING },
  { columnId: "lastName", caption: "Last Name", allowSorting: true, customCaption: "", image: "" },
  { columnId: "city", caption: "City", allowSorting: true },
  { columnId: "contactNo", caption: "Contact No", allowSorting: false }];

  const [tableConfig, setTableConfig] = useState({ data: tableData, currentSort: SORT_ASC });

  const columnHeaderClick = (tableHeader: TableHeader) => {
    if (!tableHeader.allowSorting) {
      return;
    }
    let currentSort = -1 * tableConfig.currentSort;
    tableData.sort((a: any, b: any) => {

      if (tableHeader.columnType === CASE_SENSETIVE_STRING) {
        return a[tableHeader.columnId].toLowerCase() > b[tableHeader.columnId].toLowerCase() ? 1 * currentSort : -1 * currentSort;
      } else {
        return a[tableHeader.columnId] > b[tableHeader.columnId] ? 1 * currentSort : -1 * currentSort;
      }
    });

    setTableConfig({ data: [...tableData], currentSort: currentSort });
  }

  return (

    <div className="wrapper ">
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
              <a className="navbar-brand" href="javascript:;">Topic</a>
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
                  <h4 className="card-title"> Simple Table</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className=" text-primary">
                        {
                          tableHeader.map((e: TableHeader) => {
                            return (
                              <th onClick={() => {
                                columnHeaderClick(e);
                              }}>
                                {e.caption}
                              </th>
                            )
                          })
                        }
                      </thead>

                      <tbody>

                        {
                          tableConfig.data.map((e: Student) => {
                            return (
                              <tr>
                                <td>{e.id}</td>
                                <td>{e.firstName}</td>
                                <td>{e.lastName}</td>
                                <td>{e.city}</td>
                                <td>{e.contactNo}</td>
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
            <div className="col-md-12">
              <div className="card card-plain">
                <div className="card-header">
                  <h4 className="card-title"> Table on Plain Background</h4>
                  <p className="card-category"> Here is a subtitle for this table</p>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className=" text-primary">
                        <th>
                          Name
                        </th>
                        <th>
                          Country
                        </th>
                        <th>
                          City
                        </th>
                        <th className="text-right">
                          Salary
                        </th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            Dakota Rice
                          </td>
                          <td>
                            Niger
                          </td>
                          <td>
                            Oud-Turnhout
                          </td>
                          <td className="text-right">
                            $36,738
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Minerva Hooper
                          </td>
                          <td>
                            Curaçao
                          </td>
                          <td>
                            Sinaai-Waas
                          </td>
                          <td className="text-right">
                            $23,789
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Sage Rodriguez
                          </td>
                          <td>
                            Netherlands
                          </td>
                          <td>
                            Baileux
                          </td>
                          <td className="text-right">
                            $56,142
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Philip Chaney
                          </td>
                          <td>
                            Korea, South
                          </td>
                          <td>
                            Overland Park
                          </td>
                          <td className="text-right">
                            $38,735
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Doris Greene
                          </td>
                          <td>
                            Malawi
                          </td>
                          <td>
                            Feldkirchen in Kärnten
                          </td>
                          <td className="text-right">
                            $63,542
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Mason Porter
                          </td>
                          <td>
                            Chile
                          </td>
                          <td>
                            Gloucester
                          </td>
                          <td className="text-right">
                            $78,615
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Jon Porter
                          </td>
                          <td>
                            Portugal
                          </td>
                          <td>
                            Gloucester
                          </td>
                          <td className="text-right">
                            $98,615
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Topic;