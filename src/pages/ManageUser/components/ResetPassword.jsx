import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import EditUser from "./EditUser";

function ResetPassword(props) {
    const [show3, setShow3] = useState(false);
    const handleClose = () => setShow3(false);
    const handleShow = () => {
        setShow3(true);
        clearVal();
    }
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        checkPassword();
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
    function checkPassword() {
        var input = document.getElementById('r-txt-cpw');
        if (input.value != document.getElementById('r-txt-pw').value) {
            input.setCustomValidity('Password Must be Matching.');
            setValidated(false);
        } else {
            input.setCustomValidity('');
            setValidated(true);
        }
    }
    return (
        <div>
            <Button variant="primary" onClick={handleShow} className={"me-3"}>
                Reset Password
            </Button>
            {/*reset pw*/}
            <>

                <Modal show={show3} onHide={handleClose} animation={false} backdrop={false}>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Modal.Header closeButton>
                            <Modal.Title>Reset Password</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group controlId={"validation8"}>
                                <Form.Label htmlFor="r-txt-pw">Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    id="r-txt-pw"
                                    name={"r-password"}
                                    aria-describedby="passwordHelpBlock"
                                    placeholder={"Password"}
                                    required
                                    minLength={8}
                                    pattern="^[A-Za-z0-9]{8,20}$"
                                /><Form.Control.Feedback type={"invalid"}>Enter a Password between 8-20 characters using letters and numbers.</Form.Control.Feedback>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Text id="passwordHelpBlock" muted>
                                    Enter at least 8 characters.
                                </Form.Text>
                            </Form.Group> <Form.Group controlId={"validation9"}>
                            <Form.Label htmlFor="r-txt-cpw"> Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                id="r-txt-cpw"
                                name={"r-cpassword"}
                                placeholder={"Confirm Password"}
                                required
                                minLength={8}
                            />
                            {/*<Form.Control.Feedback>Looks good!</Form.Control.Feedback>*/}
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