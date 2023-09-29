import React, {useState} from 'react'
import "./item.css"
import {UpdateModal} from "../../../components/UpdateModal/updateModal";
export const Item = ({Name}) => {
    const [isOpen, setIsOpen] = useState(false);

    const onEdit = () => {
        setIsOpen(true)
    }
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="itemWrapper">
            <div>{Name}</div>
            <div className="buttons">
                <button className="edit btn" onClick={onEdit}>Edit</button>
                <button className="delete btn">Delete</button>
            </div>
            <UpdateModal isOpen={isOpen} toggle={toggle} />
        </div>
    );
}
