import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';

function EditUser(props) {
    const [showResetModal, setShowResetModal] = useState(false);
    const { user, onHide, show, onUpdate } = props;
    const [userData, setUserData] = useState({ ...user });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSave = async () => {
        try {
            // Make a PUT request with user data
            console.log(userData);
            const response = await axios.put(`http://localhost:8080/api/user`, userData);
            // Assuming the response data matches the format you provided
            onUpdate(response.data); // Notify parent component about the update with the updated user data
            onHide(); // Close the modal after successful update
            alert('User data updated successfully!');
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <Modal show={show} onHide={onHide} animation={false}>
            <Form>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="e-txt-name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={userData.name} // Update this line to use userData instead of user
                            onChange={handleInputChange}
                            required
                            pattern="^[a-z ,.'-]+$"
                        />
                        <Form.Control.Feedback type="invalid">Provide a valid name.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="e-txt-email">
                        <Form.Label>E-Mail</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="abc@email.com"
                            name="email"
                            value={userData.email} // Update this line to use userData instead of user
                            onChange={handleInputChange}
                            required
                            pattern="^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$"
                        />
                        <Form.Control.Feedback type="invalid">Provide a valid e-mail.</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="userStatusDropdown">
                        <Form.Label>User Status</Form.Label>
                        <div className="custom-dropdown row">
                            <div className={"col-12"}>
                                <Dropdown className="custom-dropdown">
                                    <Dropdown.Toggle variant="outline-secondary" id="userStatusDropdown">
                                        {userData.userStatus}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="status-dropdown-menu">
                                        <Dropdown.Item onClick={() => setUserData({ ...userData, userStatus: 'INACTIVE' })}>
                                            INACTIVE
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => setUserData({ ...userData, userStatus: 'ACTIVE' })}>
                                            ACTIVE
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => setUserData({ ...userData, userStatus: 'SUSPENDED' })}>
                                            SUSPENDED
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => setUserData({ ...userData, userStatus: 'DEACTIVATED' })}>
                                            DEACTIVATED
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default EditUser;