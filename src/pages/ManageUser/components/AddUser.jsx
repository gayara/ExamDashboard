import React, {useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

function AddUser({onHide}) {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        userType: 0,
        userStatus: 1
    });

    const [validated, setValidated] = useState(false);

    const onInputChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    };

    const handleSubmit = async (event) => {
        checkPassword();
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            setValidated(true);
            try {
                await axios.post("http://localhost:8080/api/user", user);
                alert('New user "'+user.name+'" added successfully!');
                clearForm();
                onHide();
            } catch (error) {
                console.error('Error adding user: '+user.name, error);
            }
        }
    };

    const clearForm = () => {
        setUser({
            name: "",
            email: "",
            password: "",
            userType: 0,
            userStatus: 1
        });
        setValidated(false);
    };

    function checkPassword() {
        const input = document.getElementById('txt-cpw');
        if (input.value !== document.getElementById('txt-pw').value) {
            input.setCustomValidity('Passwords must match.');
            setValidated(false);
        } else {
            input.setCustomValidity('');
            setValidated(true);
        }
    }

    return (
        <div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>

                <Form.Group controlId={"validation1"}>
                    <Form.Label htmlFor="txt-name">Name</Form.Label>
                    <Form.Control
                        type="text"
                        id="txt-name"
                        name="name"
                        placeholder={"Name"}
                        required={true}
                        pattern="(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)"
                        value={user.name}
                        onChange={(e) => onInputChange(e)}
                    /><Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type={"invalid"}>Provide a valid name.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId={"validation2"}>
                    <Form.Label htmlFor="txt-email">E-Mail</Form.Label>
                    <Form.Control
                        type="email"
                        id="txt-email"
                        name="email"
                        placeholder={"abc@email.com"}
                        required={true}
                        pattern={"^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$"}
                        value={user.email}
                        onChange={(e) => onInputChange(e)}
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
                    pattern="^[A-Za-z0-9]{8,20}$"
                    value={user.password}
                    onChange={(e) => onInputChange(e)}
                /><Form.Control.Feedback type={"invalid"}>Enter a Password between 8-20 characters using letters and
                numbers.</Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
                />
                <Form.Control.Feedback type={"invalid"}>Entered password doesn't match..</Form.Control.Feedback>
            </Form.Group>
                <hr/>
                <Button className={"float-right me-3"} variant="primary" type={"submit"}>
                    Submit
                </Button>
                <Button className={"float-right me-3"} variant="secondary" type={"reset"} onClick={() => {
                    onHide();
                    clearForm();
                }}>
                Clear
                </Button>
            </Form>
        </div>
    );
}

export default AddUser;