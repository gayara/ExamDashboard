import React from 'react';
import Table from "react-bootstrap/Table";
import EditMCQModal from "../ManageMCQ/components/EditMCQModal";
import Button from "react-bootstrap/Button";
import "./ManageBookmarkStule.css";

function ManageBookmark(props) {
    return (
        <div>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Manage Bookmarks</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">Manage Bookmarks</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

                <div className={"mx-3"} id={"table-div"}>
                    <Table striped bordered hover id={"tbl-bookmark"}>
                        <thead id={"mng-bookmark-thead"}>
                        <tr>
                            <th>#</th>
                            <th>Test Title</th>
                            <th>Module</th>
                            <th>Difficulty</th>
                            <th>Link</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>ICT</td>
                            <td>Java</td>
                            <td>Beginner</td>
                            <td><Button variant={"link"}>Got to Test</Button></td>
                            <td>
                                <Button variant={"danger"}>Remove</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ICT</td>
                            <td>Java</td>
                            <td>Beginner</td>
                            <td><Button variant={"link"}>Got to Test</Button></td>
                            <td>
                                <Button variant={"danger"}>Remove</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ICT</td>
                            <td>Java</td>
                            <td>Beginner</td>
                            <td><Button variant={"link"}>Got to Test</Button></td>
                            <td>
                                <Button variant={"danger"}>Remove</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ICT</td>
                            <td>Java</td>
                            <td>Beginner</td>
                            <td><Button variant={"link"}>Got to Test</Button></td>
                            <td>
                                <Button variant={"danger"}>Remove</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ICT</td>
                            <td>Java</td>
                            <td>Beginner</td>
                            <td><Button variant={"link"}>Got to Test</Button></td>
                            <td>
                                <Button variant={"danger"}>Remove</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ICT</td>
                            <td>Java</td>
                            <td>Beginner</td>
                            <td><Button variant={"link"}>Got to Test</Button></td>
                            <td>
                                <Button variant={"danger"}>Remove</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ICT</td>
                            <td>Java</td>
                            <td>Beginner</td>
                            <td><Button variant={"link"}>Got to Test</Button></td>
                            <td>
                                <Button variant={"danger"}>Remove</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ICT</td>
                            <td>Java</td>
                            <td>Beginner</td>
                            <td><Button variant={"link"}>Got to Test</Button></td>
                            <td>
                                <Button variant={"danger"}>Remove</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ICT</td>
                            <td>Java</td>
                            <td>Beginner</td>
                            <td><Button variant={"link"}>Got to Test</Button></td>
                            <td>
                                <Button variant={"danger"}>Remove</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ICT</td>
                            <td>Java</td>
                            <td>Beginner</td>
                            <td><Button variant={"link"}>Got to Test</Button></td>
                            <td>
                                <Button variant={"danger"}>Remove</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ICT</td>
                            <td>Java</td>
                            <td>Beginner</td>
                            <td><Button variant={"link"}>Got to Test</Button></td>
                            <td>
                                <Button variant={"danger"}>Remove</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ICT</td>
                            <td>Java</td>
                            <td>Beginner</td>
                            <td><Button variant={"link"}>Got to Test</Button></td>
                            <td>
                                <Button variant={"danger"}>Remove</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ICT</td>
                            <td>Java</td>
                            <td>Beginner</td>
                            <td><Button variant={"link"}>Got to Test</Button></td>
                            <td>
                                <Button variant={"danger"}>Remove</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ICT</td>
                            <td>Java</td>
                            <td>Beginner</td>
                            <td><Button variant={"link"}>Got to Test</Button></td>
                            <td>
                                <Button variant={"danger"}>Remove</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ICT</td>
                            <td>Java</td>
                            <td>Beginner</td>
                            <td><Button variant={"link"}>Got to Test</Button></td>
                            <td>
                                <Button variant={"danger"}>Remove</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ICT</td>
                            <td>Java</td>
                            <td>Beginner</td>
                            <td><Button variant={"link"}>Got to Test</Button></td>
                            <td>
                                <Button variant={"danger"}>Remove</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ICT</td>
                            <td>Java</td>
                            <td>Beginner</td>
                            <td><Button variant={"link"}>Got to Test</Button></td>
                            <td>
                                <Button variant={"danger"}>Remove</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ICT</td>
                            <td>Java</td>
                            <td>Beginner</td>
                            <td><Button variant={"link"}>Got to Test</Button></td>
                            <td>
                                <Button variant={"danger"}>Remove</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ICT</td>
                            <td>Java</td>
                            <td>Beginner</td>
                            <td><Button variant={"link"}>Got to Test</Button></td>
                            <td>
                                <Button variant={"danger"}>Remove</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ICT</td>
                            <td>Java</td>
                            <td>Beginner</td>
                            <td><Button variant={"link"}>Got to Test</Button></td>
                            <td>
                                <Button variant={"danger"}>Remove</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>ICT</td>
                            <td>Java</td>
                            <td>Beginner</td>
                            <td><Button variant={"link"}>Got to Test</Button></td>
                            <td>
                                <Button variant={"danger"}>Remove</Button>
                            </td>
                        </tr>

                        </tbody>
                    </Table>
                </div>
        </div>
    );
}

export default ManageBookmark;