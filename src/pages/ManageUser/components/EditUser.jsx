import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ResetPassword from "./ResetPassword";

function EditUser(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        clearVal();
    }
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    const clearVal = ()=>{
        setValidated(false);
    }
    return (
        <>
            <Button variant="success" onClick={handleShow} className={"me-3"}>
                Edit
            </Button>
            {/*edit admin user modal*/}
            <>

                <Modal show={show} onHide={handleClose} animation={false}>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
                            <ResetPassword></ResetPassword>
                            <Button variant="secondary" type={"reset"} onClick={clearVal} >
                                Clear
                            </Button>
                            <Button variant="primary" type={"submit"}>
                                Edit User
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </>
        </>
    );
}

export default EditUser;