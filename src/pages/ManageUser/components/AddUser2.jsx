import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputText from "../../../components/InputText";

function AddUser2(props) {
    const[values,setValues] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            id:1,
            name:"name",
            type:"text",
            placeholder:"Name",
            errorMessage:"Username should be 3-16 characters and should't include any special characters!",
            label:"Username",
            pattern: "^[A-Za-z0-9]$",
            required:true,

        },

        {
            id:2,
            name:"email",
            type:"email",
            placeholder:"Email",
            errorMessage:"It should be a valid email address!",
            label:"Email",
            required:true,
        },

        {
            id:4,
            name:"password",
            type:"password",
            placeholder:"Password",
            errorMessage:"Password should be 8-20 characters!",
            label:"Password",
            pattern:"^[A-Za-z0-9]{8,20}$",
            required:true,
        },

        {
            id:5,
            name:"confirmPassword",
            type:"password",
            placeholder:"Confirm Password",
            errorMessage:"Passwords don't match!",
            label:"Confirm Password",
            pattern:values.password,
            required:true,
        },
    ];

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    const onChange = (e) => {
        setValues({...values, [e.target.name]:e.target.value})
    }

    console.log(values);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(true);
    const handleShow = () => {
        setShow(true);
        clearVal();
    }
    const [validated, setValidated] = useState(false);

    // const handleSubmit = (event) => {
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //     }
    //
    //     setValidated(true);
    // };
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
                            <form onSubmit={handleSubmit}>
                                {inputs.map((input) => (
                                    <InputText key={input.id} {...input} values={[input.name]} onChange={onChange}/>
                                ))}
                            </form>
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

export default AddUser2;