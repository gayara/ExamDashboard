import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputText from "../../../components/InputText";

function AddUser(props) {
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
            {/*Create admin user button*/}
            <Button variant="primary" onClick={handleShow} className={"me-3 float-right"}>
                Create Admin User
            </Button>
            <br/>
            {/*Create admin user modal*/}
            <>

                <Modal show={show} onHide={handleClose} animation={false} centered={true}>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Modal.Header closeButton>
                            <Modal.Title>Register Admin User</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className={"row"}>
                                <InputText
                                    label={"Name"}
                                    id={"txt-name"}
                                    type={"text"}
                                    name={"txt-name"}
                                    placeholder={"Name"}
                                    required={true}
                                    pattern={"^[A-Za-z]&"}
                                    colSize={"col-6"} />
                            </div>

                            <Form.Group controlId={"validation2"}>
                            <Form.Label htmlFor="txt-email">E-Mail</Form.Label>
                            <Form.Control
                                type="email"
                                id="txt-email"
                                name="txt-email"
                                placeholder={"abc@email.com"}
                                required={true}
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
        </div>
    );
}

export default AddUser;