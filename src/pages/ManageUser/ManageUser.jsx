import React from 'react';
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import "./ManageUserStyle.css"
import { useState } from 'react';
function ManageUser(props) {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false);
    const handleClose3 = () => setShow3(false);
    const handleShow = () => {
        setShow(true);
        clearVal();
    }
    const handleShow2 = () => {
        setShow2(true);
        clearVal2();
    }
    const handleShow3 = () => {
        setShow3(true);
        clearVal3();
        handleClose2();
        clearVal2();
    }

    const [validated, setValidated] = useState(false);
    const [validated2, setValidated2] = useState(false);
    const [validated3, setValidated3] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const handleSubmit2 = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated2(true);
    };

    const handleSubmit3 = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated3(true);
    };

    const clearVal = ()=>{
        setValidated(false);
    }
    const clearVal2 = ()=>{
        setValidated2(false);
    }
    const clearVal3 = ()=>{
        setValidated3(false);
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
            {/*Create admin user button*/}
            <Button variant="primary" onClick={handleShow} className={"me-3"}>
                Create Admin User
            </Button>
            {/*Edit user and reset pw*/}
            <Button variant="primary" onClick={handleShow2} className={"me-3"}>
                Edit User
            </Button>
            <Button variant="primary" onClick={handleShow3} className={"me-3"}>
                Reset pw
            </Button>

            {/* User Type Dropdown*/}
            <Dropdown>
                <Dropdown.Toggle className={"ms-3"} variant="primary" id="dropdown-user-type">
                    User Type
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Admin</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Student</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            {/*Create admin user modal*/}
            <>

                <Modal show={show} onHide={handleClose} animation={false}>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Register Admin User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group controlId={"validation1"}>
                        <Form.Label htmlFor="txt-name">Name</Form.Label>
                        <Form.Control
                            type="text"
                            id="txt-name"
                            placeholder={"Name"}
                            required
                        /><Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group> <Form.Group controlId={"validation2"}>
                        <Form.Label htmlFor="txt-email">E-Mail</Form.Label>
                        <Form.Control
                            type="email"
                            id="txt-email"
                            placeholder={"abc@email.com"}
                            required
                        /><Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type={"invalid"}>Provide an valid e-mail.</Form.Control.Feedback>
                    </Form.Group> <Form.Group controlId={"validation3"}>
                        <Form.Label htmlFor="txt-pw">Password</Form.Label>
                        <Form.Control
                            type="password"
                            id="txt-pw"
                            name={"password"}
                            aria-describedby="passwordHelpBlock"
                            placeholder={"Password"}
                            required
                            minLength={8}
                        /><Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Text id="passwordHelpBlock" muted>
                            Enter at least 8 characters.
                        </Form.Text>
                    </Form.Group> <Form.Group controlId={"validation4"}>
                        <Form.Label htmlFor="txt-cpw"> Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            id="txt-cpw"
                            name={"cpassword"}
                            placeholder={"Confirm Password"}
                            required
                            minLength={8}
                        /><Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type={"invalid"}>Entered password doesn't match..</Form.Control.Feedback>
                    </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" type={"reset"} onClick={clearVal} >
                            Clear
                        </Button>
                        <Button variant="primary" type={"submit"}>
                            Submit
                        </Button>
                    </Modal.Footer>
                    </Form>
                </Modal>
            </>

            {/*edit admin user modal*/}
            <>

                <Modal show={show2} onHide={handleClose2} animation={false}>
                    <Form noValidate validated={validated2} onSubmit={handleSubmit2}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Admin User</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group controlId={"validation5"}>
                                <Form.Label htmlFor="e-txt-name">Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="e-txt-name"
                                    placeholder={"Name"}
                                    required
                                /><Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group> <Form.Group controlId={"validation6"}>
                            <Form.Label htmlFor="e-txt-email">E-Mail</Form.Label>
                            <Form.Control
                                type="email"
                                id="e-txt-email"
                                placeholder={"abc@email.com"}
                                required
                            /><Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type={"invalid"}>Provide an valid e-mail.</Form.Control.Feedback>
                        </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="outline-primary" onClick={handleShow3} className={"me-3 float-left"}>
                                Reset Password
                            </Button>
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

            {/*reset pw*/}
            <>

                <Modal show={show3} onHide={handleClose3} animation={false}>
                    <Form noValidate validated={validated3} onSubmit={handleSubmit3}>
                        <Modal.Header closeButton>
                            <Modal.Title>Reset Password</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group controlId={"validation7"}>
                            <Form.Label htmlFor="e-txt-pw">New Password</Form.Label>
                            <Form.Control
                                type="password"
                                id="e-txt-pw"
                                name={"e-password"}
                                aria-describedby="passwordHelpBlock"
                                placeholder={"New Password"}
                                required
                                minLength={8}
                            /><Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Text id="passwordHelpBlock" muted>
                                Enter at least 8 characters.
                            </Form.Text>
                        </Form.Group> <Form.Group controlId={"validation8"}>
                            <Form.Label htmlFor="e-txt-cpw"> Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                id="e-txt-cpw"
                                name={"e-cpassword"}
                                placeholder={"Confirm Password"}
                                required
                                minLength={8}
                            /><Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type={"invalid"}>Entered password doesn't match..</Form.Control.Feedback>
                        </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" type={"reset"} onClick={clearVal3} >
                                Clear
                            </Button>
                            <Button variant="primary" type={"submit"}>
                                Set Password
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </>


            {/*Users Table*/}
            <Table id={"tbl-mng-user"} striped bordered hover className={"m-3 me-6"}>
                <thead>
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
                        <Button className={"btn-success"}>Edit</Button>
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
                </tbody>
            </Table>

        </div>
    );
}

export default ManageUser;