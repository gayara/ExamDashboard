import React, {useEffect, useState} from 'react';
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ManageUserStyle.css"
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import AddUser2 from "./components/AddUser2";
import axios from "axios";
function ManageUser(props) {

    const [users,setUsers]=useState([])

    useEffect(()=>{
        loadUsers();
    });

    const loadUsers=async ()=>{
        const result=await axios.get("http://localhost:8080/api/user")
        setUsers(result.data);
        //console.log(result.data);
    }

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
                    <Dropdown.Item href="#/type/0">Admin</Dropdown.Item>
                    <Dropdown.Item href="#/type/1">Student</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <div className={"me-3 ms-3"} id={"table-div"}>
                {/*Users Table*/}
                <Table id={"tbl-mng-user"} striped bordered hover>
                    <thead id={"mng-user-thead"}>
                    <tr>
                        <th scope={"col"}>#</th>
                        <th scope={"col"}>Name</th>
                        <th scope={"col"}>E-mail</th>
                        <th scope={"col"}>Type</th>
                        <th scope={"col"}>Status</th>
                        <th scope={"col"}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user,index)=>(
                            <tr>
                                <td scope={"row"} key={index}>{index+1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.userType.toString()}</td>
                                <td>{user.userStatus.toString()}</td>
                                <td>Action</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </div>


        </div>
    );
}

export default ManageUser;