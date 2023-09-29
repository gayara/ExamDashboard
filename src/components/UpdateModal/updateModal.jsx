import React from 'react'
import {Modal} from "reactstrap";
import "./UpdateModal.css"
export const UpdateModal = ({isOpen, toggle}) => {
    return (
        <Modal
            isOpen={isOpen}
            toggle={toggle}
            centered
        >
            <div className="updateModalWrapper">
                <div className="updateText">Update Subject</div>
                <input className="updateInput"/>
                <div className="updateBtn">
                    <button>Update</button>
                </div>
            </div>
        </Modal>

    )
}

