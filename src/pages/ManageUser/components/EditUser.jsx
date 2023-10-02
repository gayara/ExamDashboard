import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import ResetPassword from "./ResetPassword";

function EditUser(props) {
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => {
        setShow2(true);
        clearVal2();
    };
    const [validated2, setValidated2] = useState(false);
    const [userStatus, setUserStatus] = useState("active"); // Default status is active, you can set it accordingly

    const handleSubmit2 = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated2(true);
    };

    const clearVal2 = () => {
        setValidated2(false);
    };

    function getStatusText(status) {
        switch (status) {
            case 0:
                return "INACTIVE";
            case 1:
                return "ACTIVE";
            case 2:
                return "SUSPENDED";
            case 3:
                return "DEACTIVATED";
            default:
                return "UNKNOWN STATUS";
        }
    }

    return (
        <>
            <Button variant="success" onClick={handleShow2} className={"me-3"}>
                Edit
            </Button>
            {/*edit admin user modal*/}
            <Modal show={show2} onHide={handleClose2} animation={false}>
                <Form noValidate validated={validated2} onSubmit={handleSubmit2}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Admin User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group controlId={"validation6"}>
                            <Form.Label htmlFor="e-txt-name">Name</Form.Label>
                            <Form.Control
                                type="text"
                                id="e-txt-name"
                                name="e-txt-name"
                                placeholder={"Name"}
                                required={true}
                                pattern="^[a-z ,.'-]+$"
                            /><Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type={"invalid"}>Provide a valid name.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId={"validation7"}>
                            <Form.Label htmlFor="e-txt-email">E-Mail</Form.Label>
                            <Form.Control
                                type="email"
                                id="e-txt-email"
                                name="e-txt-email"
                                placeholder={"abc@email.com"}
                                required={true}
                                pattern={"^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$"}
                            /><Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type={"invalid"}>Provide a valid e-mail.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="userStatusDropdown">
                            <Form.Label>User Status</Form.Label>
                            <Dropdown onSelect={(eventKey) => setUserStatus(eventKey)}>
                                <Dropdown.Toggle variant="primary" id="userStatusDropdown">
                                    {getStatusText(userStatus)}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey={0}>INACTIVE</Dropdown.Item>
                                    <Dropdown.Item eventKey={1}>ACTIVE</Dropdown.Item>
                                    <Dropdown.Item eventKey={2}>SUSPENDED</Dropdown.Item>
                                    <Dropdown.Item eventKey={3}>DEACTIVATED</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <ResetPassword></ResetPassword>
                        <Button variant="secondary" type={"reset"} onClick={clearVal2} >
                            Clear
                        </Button>
                        <Button variant="primary" type={"submit"}>
                            Edit User
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export default EditUser;