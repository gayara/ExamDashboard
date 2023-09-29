import React from 'react'
import {Modal} from "reactstrap";
import "./CreateModal.css"
export const CreateModal = ({isOpen, toggle}) => {
    return (
        <Modal
            isOpen={isOpen}
            toggle={toggle}
            centered
        >
            <div className="updateModalWrapper">
                <div className="updateText">Create Subject</div>
                <input className="updateInput"/>
                <div className="updateBtn">
                    <button>Create</button>
                </div>
            </div>
        </Modal>

    )
}

