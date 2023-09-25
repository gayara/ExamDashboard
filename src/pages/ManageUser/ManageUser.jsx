import React from 'react';
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ManageUserStyle.css"
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
function ManageUser(props) {


    return (
        <div>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Manage Users</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">Manage Users</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>


            <AddUser></AddUser>
            {/* User Type Dropdown*/}
            <Dropdown className={"mb-3"}>
                <Dropdown.Toggle className={"ms-3"} variant="primary" id="dropdown-user-type">
                    User Type
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Admin</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Student</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <div className={"me-3"} id={"table-div"}>
                {/*Users Table*/}
                <Table id={"tbl-mng-user"} striped bordered hover>
                    <thead id={"mng-user-thead"}>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Peheliya</td>
                        <td>peheliya@gmail.com</td>
                        <td>ACTIVE</td>
                        <td>
                            <EditUser></EditUser>
                            <Button className={"btn-danger"}>Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Peheliya</td>
                        <td>peheliya@gmail.com</td>
                        <td>ACTIVE</td>
                        <td>
                            <Button className={"btn-success"}>Edit</Button>
                            <Button className={"btn-danger"}>Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Peheliya</td>
                        <td>peheliya@gmail.com</td>
                        <td>ACTIVE</td>
                        <td>
                            <Button className={"btn-success"}>Edit</Button>
                            <Button className={"btn-danger"}>Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Peheliya</td>
                        <td>peheliya@gmail.com</td>
                        <td>ACTIVE</td>
                        <td>
                            <Button className={"btn-success"}>Edit</Button>
                            <Button className={"btn-danger"}>Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Peheliya</td>
                        <td>peheliya@gmail.com</td>
                        <td>ACTIVE</td>
                        <td>
                            <Button className={"btn-success"}>Edit</Button>
                            <Button className={"btn-danger"}>Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Peheliya</td>
                        <td>peheliya@gmail.com</td>
                        <td>ACTIVE</td>
                        <td>
                            <Button className={"btn-success"}>Edit</Button>
                            <Button className={"btn-danger"}>Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Peheliya</td>
                        <td>peheliya@gmail.com</td>
                        <td>ACTIVE</td>
                        <td>
                            <Button className={"btn-success"}>Edit</Button>
                            <Button className={"btn-danger"}>Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Peheliya</td>
                        <td>peheliya@gmail.com</td>
                        <td>ACTIVE</td>
                        <td>
                            <Button className={"btn-success"}>Edit</Button>
                            <Button className={"btn-danger"}>Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Peheliya</td>
                        <td>peheliya@gmail.com</td>
                        <td>ACTIVE</td>
                        <td>
                            <Button className={"btn-success"}>Edit</Button>
                            <Button className={"btn-danger"}>Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Peheliya</td>
                        <td>peheliya@gmail.com</td>
                        <td>ACTIVE</td>
                        <td>
                            <Button className={"btn-success"}>Edit</Button>
                            <Button className={"btn-danger"}>Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Peheliya</td>
                        <td>peheliya@gmail.com</td>
                        <td>ACTIVE</td>
                        <td>
                            <Button className={"btn-success"}>Edit</Button>
                            <Button className={"btn-danger"}>Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Peheliya</td>
                        <td>peheliya@gmail.com</td>
                        <td>ACTIVE</td>
                        <td>
                            <Button className={"btn-success"}>Edit</Button>
                            <Button className={"btn-danger"}>Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Peheliya</td>
                        <td>peheliya@gmail.com</td>
                        <td>ACTIVE</td>
                        <td>
                            <Button className={"btn-success"}>Edit</Button>
                            <Button className={"btn-danger"}>Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Peheliya</td>
                        <td>peheliya@gmail.com</td>
                        <td>ACTIVE</td>
                        <td>
                            <Button className={"btn-success"}>Edit</Button>
                            <Button className={"btn-danger"}>Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Peheliya</td>
                        <td>peheliya@gmail.com</td>
                        <td>ACTIVE</td>
                        <td>
                            <Button className={"btn-success"}>Edit</Button>
                            <Button className={"btn-danger"}>Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Peheliya</td>
                        <td>peheliya@gmail.com</td>
                        <td>ACTIVE</td>
                        <td>
                            <Button className={"btn-success"}>Edit</Button>
                            <Button className={"btn-danger"}>Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Peheliya</td>
                        <td>peheliya@gmail.com</td>
                        <td>ACTIVE</td>
                        <td>
                            <Button className={"btn-success"}>Edit</Button>
                            <Button className={"btn-danger"}>Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Peheliya</td>
                        <td>peheliya@gmail.com</td>
                        <td>ACTIVE</td>
                        <td>
                            <Button className={"btn-success"}>Edit</Button>
                            <Button className={"btn-danger"}>Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Peheliya</td>
                        <td>peheliya@gmail.com</td>
                        <td>ACTIVE</td>
                        <td>
                            <Button className={"btn-success"}>Edit</Button>
                            <Button className={"btn-danger"}>Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Peheliya</td>
                        <td>peheliya@gmail.com</td>
                        <td>ACTIVE</td>
                        <td>
                            <Button className={"btn-success"}>Edit</Button>
                            <Button className={"btn-danger"}>Delete</Button>
                        </td>
                    </tr>

                    </tbody>
                </Table>
            </div>


        </div>
    );
}

export default ManageUser;