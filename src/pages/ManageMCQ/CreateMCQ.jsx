import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import "./CreateMCQStyle.css";
import noImage from "../../assets/img/noimage.jpg"
import ShowImageModal from "./components/ShowImageModal";
import EditMCQModal from "./components/EditMCQModal";


function CreateMcq(props) {
    const handleShow = () => {
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
    const [image, setImage] = useState(noImage);

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
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Create Question</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">List of MCQ</a></li>
                                <li className="breadcrumb-item active">Create Question</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>



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
                                        <Form.Select id={"c-mcq-subject"} defaultValue={"Select Subject"}>
                                            <option disabled={false}>Select Subject</option>
                                            <option>Sub-1</option>
                                            <option>Sub-2</option>
                                            required
                                        </Form.Select>
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback onInvalid={"Select a Subject."}></Form.Control.Feedback>
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
                                </div>
                                <Table id={"c-mcq-table"} striped bordered hover className={"me-3"}>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Text Answer</th>
                                            <th>Image Answer</th>
                                            <th>Is Correct</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody id={"c-mcq-tbody"}>
                                        <tr>
                                            <td>1</td>
                                            <td><input type={"text"} id={"txt-answer"}/></td>
                                            <td><input type={"file"} id={"file-image"}/><EditMCQModal></EditMCQModal></td>
                                            <td><input type={"checkbox"} id={"isCorrect"}/></td>
                                            <td><Button className={"btn-danger"}>Delete</Button></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                    <div className={"row"}>
                        <div className={"col-12"}>
                            <Button type={"submit"} className={"float-right"}>Submit</Button>
                            <Button onClick={resetImage} type={"reset"} className={"float-right me-3"}>New Question</Button>
                        </div>
                    </div>
                </Form>
            </div>
            <script src={"CreateMcq.js"}></script>
        </div>
    );
}

export default CreateMcq;