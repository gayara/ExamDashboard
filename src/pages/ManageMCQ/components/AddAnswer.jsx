import React, {useState} from 'react';
import noImage from "../../../assets/img/noimage.jpg";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import ToggleButton from "react-bootstrap/ToggleButton";

function AddAnswer(props) {
    const [validated, setValidated] = useState(false);

    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false)

    const [image, setImage] = useState(noImage);
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
        setRadioValue(false);
    }
    const handleShow = () => {
        clearVal();
        setShow(true);
    }

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }
    const [radioValue, setRadioValue] = useState('false');

    const radios = [
        { name: 'No', value: 'false' },
        { name: 'Yes', value: 'true' },
    ];
    return (
        <div>
            <Button variant="primary" onClick={handleShow} className={"me-3"}>
                Add Answer
            </Button>

            <>

                <Modal show={show} onHide={handleClose} animation={false} centered={true}>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add an Answer</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className={"row"}>
                                <div  className={"col-12"}>
                                    <Form.Group controlId={"validation1"}>
                                        <Form.Label htmlFor="c-ans-txt">Answer Text</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="c-ans-txt"
                                            placeholder={"Answer Text"}
                                            required
                                        /><Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type={"invalid"}>Enter an answer.</Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className={"row"}>
                                <div className={"col-12"}>
                                    <Form.Group controlId="validation2">
                                        <Form.Label>Answer Type</Form.Label>
                                        <Form.Select defaultValue="Answer Type" id={"c-answer-type"}>
                                            <option disabled={true}>--Answer Type--</option>
                                            <option value={"TEXT"}>Text</option>
                                            <option value={"IMAGE"}>Image</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type={"invalid"}>Please select Answer Type</Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className={"row"}>
                                <div className={"col-6"}>
                                    <Form.Label>Is Correct</Form.Label>
                                </div>
                                <div className={"col-6"}><br/>
                                    <div className={"float-right"}>
                                        {radios.map((radio, idx) => (
                                            <ToggleButton
                                                className={""}
                                                key={idx}
                                                id={`radio-${idx}`}
                                                type="radio"
                                                variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                                                name="radio"
                                                value={radio.value}
                                                checked={radioValue === radio.value}
                                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                                            >
                                                {radio.name}
                                            </ToggleButton>
                                        ))}
                                        </div>
                                </div>
                            </div>
                            <div className={"row"} id={"imageSelect"}>
                                <div className={"col-12"}>
                                    <Form.Group Id={"validation3"}>
                                        <Form.Label htmlFor="file-image-answer">Select Image</Form.Label>
                                        <Form.Control
                                            type="file"
                                            id="c-file-image-answer"
                                            accept={"image/*"}
                                            onChange={onImageChange}
                                        /><Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type={"invalid"}>Please Select an Image.</Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className={"row"} id={"imageSelect2"}>
                                <div className={"col-12"}>
                                        <img src={image} alt={"Selected Image"} id={"c-mcq-img"}/>
                                </div>
                            </div>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" type={"reset"} onClick={clearVal} >
                                Clear
                            </Button>
                            <Button variant="primary" type={"submit"}>
                                Add Answer
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </>

        </div>
    );
}

export default AddAnswer;