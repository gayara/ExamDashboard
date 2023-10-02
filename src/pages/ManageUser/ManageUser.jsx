import React, { useEffect, useState } from 'react';
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ManageUserStyle.css";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import axios from "axios";

function ManageUser(props) {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            const result = await axios.get("http://localhost:8080/api/user");
            setUsers(result.data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    const handleEditClick = (user) => {
        setSelectedUser(user);
        setShowEditModal(true);
    };

    const handleDeleteClick = (userId) => {
        // Implement logic to handle delete operation for the user with userId
        console.log(`Delete user with ID: ${userId}`);
    };

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
                <Table id={"tbl-mng-user"} striped bordered hover>
                    <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td scope={"row"}>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.userType.toString()}</td>
                            <td>{user.userStatus.toString()}</td>
                            <td>
                                <Button variant="success" onClick={() => handleEditClick(user)} className="me-2">
                                    Edit
                                </Button>
                                <Button variant="danger" onClick={() => handleDeleteClick(user.id)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>

            {showEditModal && selectedUser && (
                <EditUser
                    user={selectedUser}
                    onHide={() => setShowEditModal(false)}
                    onUpdate={() => {
                        setShowEditModal(false);
                        loadUsers(); // Reload users after editing
                    }}
                />
            )}
        </div>
    );
}

export default ManageUser;