import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ResetPassword from "./ResetPassword";

function EditUser(props) {
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => {
        setShow2(true);
        clearVal2();
    }
    const [validated2, setValidated2] = useState(false);

    const handleSubmit2 = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated2(true);
    };
    const clearVal2 = ()=>{
        setValidated2(false);
    }
    return (
        <>
            <Button variant="success" onClick={handleShow2} className={"me-3"}>
                Edit
            </Button>
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
        </>
    );
}

export default EditUser;