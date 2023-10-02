import React, {useState} from 'react';
import noImage from "../../../assets/img/noimage.jpg";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import ToggleButton from "react-bootstrap/ToggleButton";
import {ToggleButtonGroup} from "react-bootstrap";

function AddAnswer(props) {
    const [validatedadd, setValidatedadd] = useState(false);

    const [showadd, setShowadd] = useState(false);
    const handleClose = () => setShowadd(false)

    const [image, setImage] = useState(noImage);
    const handleSubmitadd = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidatedadd(true);
    };
    const clearVal = ()=>{
        setValidatedadd(false);
        setRadioValue(false);
    }
    const handleShow = () => {
        clearVal();
        setShowadd(true);
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

    let Answer = [];// initialize a user array
    const AnswerProperties=['texti','typei','isCorrect','imageUrl'];// input fileds


    return (
        <div>
            <Button variant="primary" onClick={handleShow} className={"me-3"}>
                Add Answer
            </Button>

            <>

                <Modal show={showadd} onHide={handleClose} animation={false} centered={true}>
                    <Form noValidate validated={validatedadd} onSubmit={handleSubmitadd} id={"addAnswerForm"}>
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
                                        {/*{radios.map((radio, idx) => (*/}
                                        {/*    <ToggleButton*/}
                                        {/*        className={""}*/}
                                        {/*        key={idx}*/}
                                        {/*        id={`radio-${idx}`}*/}
                                        {/*        type="radio"*/}
                                        {/*        variant={idx % 2 ? 'outline-success' : 'outline-danger'}*/}
                                        {/*        name="radio"*/}
                                        {/*        value={radio.value}*/}
                                        {/*        checked={radioValue === radio.value}*/}
                                        {/*        onChange={(e) => setRadioValue(e.currentTarget.value)}*/}
                                        {/*    >*/}
                                        {/*        {radio.name}*/}
                                        {/*    </ToggleButton>*/}
                                        {/*))}*/}
                                        <ToggleButtonGroup type="radio" name="options" >
                                            <ToggleButton id="tbg-radio-1" value={true} variant={"outline-success"}>
                                               Yes
                                            </ToggleButton>
                                            <ToggleButton id="tbg-radio-2" value={false} variant={"outline-danger"}>
                                                No
                                            </ToggleButton>
                                        </ToggleButtonGroup>
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
            {/*<script src={"AddAnswerJS.js"}>*/}
            {/*    */}
            {/*</script>*/}
        </div>
    );
}

export default AddAnswer;