import React from 'react';
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import EditMCQModal from "./components/EditMCQModal";

function ListOfMcq(props) {
    return (
        <div>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>List of MCQ</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">List of MCQ</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <div className={"row"}>
                <div className={"col-12"}>
                    <Button className={"me-3 float-right"}>Create MCQ</Button>
                </div>
            </div>
            <div className={"row"}>
                <div className={"col-12"}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Subject</th>
                                <th>Module</th>
                                <th>Question</th>
                                <th>Difficulty</th>
                                <th>Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>ICT</td>
                                <td>Java</td>
                                <td>What's OOP</td>
                                <td>Beginner</td>
                                <td>Text</td>
                                <td>
                                    <EditMCQModal></EditMCQModal>
                                    <Button variant={"danger"}>Delete</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>

        </div>
    );
}

export default ListOfMcq;