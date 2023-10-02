import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Dropdown, Table } from 'react-bootstrap';
import EditUser from "./components/EditUser";
import AddUser from "./components/AddUser";

function ManageUser() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            const result = await axios.get('http://localhost:8080/api/user');
            setUsers(result.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const loadAdminUsers = async () => {
        try {
            const result = await axios.get("http://localhost:8080/api/user/type/0");
            setUsers(result.data);
            console.log(result.data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    const loadStudentUsers = async () => {
        try {
            const result = await axios.get("http://localhost:8080/api/user/type/1");
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
        const isConfirmed = window.confirm("Are you sure you want to delete this user?");
        if (isConfirmed) {
            axios.delete(`http://localhost:8080/api/user/${userId}`)
                .then(() => {
                    alert("User deleted successfully!");
                    loadUsers();
                    console.log(`Delete user with ID: ${userId}`);
                })
                .catch((error) => {
                    console.error("Error deleting user:", error);
                    alert("Error deleting user. Please try again later.");
                });
        } else {
            console.log("User deletion canceled.");
        }
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

            {/*Add admin user*/}
            {showAddModal && (
            <AddUser showAdd={showAddModal}
                     onHide={() => setShowAddModal(false)}
                     onUpdate={() => {
                         setShowAddModal(false);
                         loadUsers(); // Reload users after editing
                     }}/>)}


            {/* User Type Dropdown*/}
            <Dropdown className={"mb-3"}>
                <Dropdown.Toggle className={"ms-3"} variant="primary" id="dropdown-user-type">
                    User Type
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/type/0" onClick={loadUsers}>All</Dropdown.Item>
                    <Dropdown.Item href="#/type/0" onClick={loadAdminUsers}>Admin</Dropdown.Item>
                    <Dropdown.Item href="#/type/1" onClick={loadStudentUsers}>Student</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <div className={"me-3 ms-3"} id={"table-div"}>
                <Table id={"tbl-mng-user"} striped bordered hover>
                    <thead id={"mng-user-thead"}>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>User Type</th>
                        <th>User Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
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
                    show={showEditModal}
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