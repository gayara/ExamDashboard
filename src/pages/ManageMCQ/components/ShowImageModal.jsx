import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import noImage from "../../../assets/img/noimage.jpg"
import "../CreateMCQStyle.css"

ShowImageModal.propTypes = {

};

function ShowImageModal(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }
    return (
        <div>
            <Button variant="link" onClick={handleShow} className={"me-3"}>
                View Image
            </Button>

            {/*Create admin user modal*/}
            <>

                <Modal show={show} onHide={handleClose} animation={false} size={"sm"} centered={true}>
                        <Modal.Header closeButton>
                            <Modal.Title>Question Image</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img src={noImage} alt={"Question Image"} id={"c-ans-modal"}/>
                        </Modal.Body>
                </Modal>
            </>
        </div>
    );
}

export default ShowImageModal;