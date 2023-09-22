import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ResetPassword(props) {
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
        <div>
            <Button variant="primary" onClick={handleShow} className={"me-3"}>
                Reset Password
            </Button>
            {/*reset pw*/}
            <>

                <Modal show={show} onHide={handleClose} animation={false} backdrop={false}>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
                            <Button variant="secondary" type={"reset"} onClick={clearVal} >
                                Clear
                            </Button>
                            <Button variant="primary" type={"submit"}>
                                Set Password
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </>
        </div>
    );
}

export default ResetPassword;