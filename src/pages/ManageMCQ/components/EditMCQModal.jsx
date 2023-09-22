import React, {useState} from 'react';
import noImage from "../../../assets/img/noimage.jpg";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

function EditMcqModal(props) {

    const [validated, setValidated] = useState(false);

    const [show, setShow] = useState(false);
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
    const resetImage = () => {
        setImage(noImage);
    }

    return (
        <div>
            <Button variant="success" onClick={handleShow} className={"me-3"}>
                Edit
            </Button>

            {/*edit mcq modal*/}
            <>
                <Modal show={show} onHide={handleClose} animation={false} size={"xl"}>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Question</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className={"m-3"}>
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                    <div className={"row"}>
                                        <div className={"col-12"}>
                                            <Button className={"me-3 float-right"}>Back to MCQ List</Button>
                                        </div>
                                    </div>
                                    <div className={"row"}>
                                        <div className={"col-xs-12 col-sm-6"}>
                                            <Form.Group controlId="formGridState">
                                                <Form.Label>Subject</Form.Label>
                                                <Form.Select defaultValue="Select Subject" id={"c-mcq-subject"}>
                                                    <option>Select Subject</option>
                                                    <option>Sub-1</option>
                                                    <option>Sub-2</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                        <div className={"col-xs-12 col-sm-6"}>
                                            <Form.Group controlId="formGridState">
                                                <Form.Label>Module</Form.Label>
                                                <Form.Select defaultValue="Select Module" id={"c-mcq-module"}>
                                                    <option>Select Module</option>
                                                    <option>Mod-1</option>
                                                    <option>Mod-2</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className={"row"}>
                                        <div className={"col-xs-12 col-sm-6"}>
                                            <Form.Group controlId="formGridState">
                                                <Form.Label>Difficulty Level</Form.Label>
                                                <Form.Select defaultValue="Select Difficulty Level" id={"c-mcq-level"}>
                                                    <option>Select Difficulty Level</option>
                                                    <option>Beginner</option>
                                                    <option>Intermediate</option>
                                                    <option>Advanced</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                        <div className={"col-xs-12 col-sm-6"}>
                                            <Form.Group controlId="formGridState">
                                                <Form.Label>Select MCQ Type</Form.Label>
                                                <Form.Select defaultValue="Select MCQ Type" id={"c-mcq-type"}>
                                                    <option>Select MCQ Type</option>
                                                    <option>Text</option>
                                                    <option>Image</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className={"row"}>
                                        <div  className={"col-12"}>
                                            <Form.Group controlId={"validation1"}>
                                                <Form.Label htmlFor="c-mcq-txt-question">Question Text</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="c-mcq-txt-question"
                                                    placeholder={"Question Text"}
                                                    required
                                                /><Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className={"row"}>
                                        <div className={"col-xs-12 col-sm-6"}>
                                            <Form.Group controlId={"validation1"} id={"c-mcq-file"}>
                                                <Form.Label htmlFor="c-mcq-txt-question">Question Image</Form.Label>
                                                <Form.Control
                                                    type="file"
                                                    id="c-mcq-image"
                                                    placeholder={"Question Text"}
                                                    accept={"image/*"}
                                                    onChange={onImageChange}
                                                /><Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>
                                        </div>
                                        <div className={"col-xs-12 col-sm-6"}>
                                            <img src={image} alt={"Selected Image"} id={"c-mcq-img"}/>
                                        </div>
                                    </div>
                                    <div className={"row"}>
                                        <div  className={"col-12"}>
                                            <Form.Group controlId={"validation2"}>
                                                <Form.Label htmlFor="c-mcq-txt-explanation">Question Explanation</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    id="c-mcq-txt-explanation"
                                                    placeholder={"Question Explanation"}

                                                /><Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className={"row"}>
                                        <div  className={"col-12"}>
                                            <hr/>
                                        </div>
                                    </div>
                                    <div className={"row"}>
                                        <div className={"col-xs-12 col-sm-12"}>
                                            <Button>Add Answer</Button>
                                            {/*    text anser, img answ, iscorct, action*/}
                                            {/*    new queston btn, submit*/}
                                        </div>
                                        <Table striped bordered hover className={"me-3"}>
                                            <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Text Answer</th>
                                                <th>Image Answer</th>
                                                <th>Is Correct</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td><input type={"text"} id={"txt-answer"}/></td>
                                                <td><input type={"file"} id={"file-image"}/></td>
                                                <td><input type={"checkbox"} id={"isCorrect"}/></td>
                                                <td><Button className={"btn-danger"}>Delete</Button></td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Form>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type={"submit"} className={"float-right"} onClick={clearVal}>Update</Button>
                            <Button onClick={resetImage} type={"reset"} className={"float-right me-3"}>Cancel</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </>
        </div>
    );
}

export default EditMcqModal;