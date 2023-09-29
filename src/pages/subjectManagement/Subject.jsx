import React, {useState} from 'react'
import {Item} from "./components/item";
import './subject.css'
import {CreateModal} from "../../components/CreateModal/CreateModal";
const subjects = [
    {
        "Test_id": 1,
        "Subject_name": "Maths",
    },

    {
        "Test_id": 2,
        "Subject_name": "Science",
    },

    {
        "Test_id": 3,
        "Subject_name": "English",
    },

    {
        "Test_id": 4,
        "Subject_name": "History",
    },

    {
        "Test_id": 5,
        "Subject_name": "Helth",
    }
]
export const Subjects = () => {
    const [isOpen, setIsOpen] = useState(false)
    const onCreate = () => {
        setIsOpen(true)
    }
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="SubjectWrapper">
            <div className="top">
                <div className="SujectManagement">Manage Subjects</div>
                <button className="CreateBtn" onClick={onCreate}>Create Subject</button>
            </div>
            <div className="headers">
                <div className="text">Subject</div>
                <div className="text">Action</div>
            </div>
            <div className="table">
                {subjects.map((subject)=>(
                    <Item
                        key={subject.Test_id}
                        Name={subject.Subject_name}
                    />
                ))
                }
            </div>
            <CreateModal isOpen={isOpen} toggle={toggle} />

        </div>
    );
}
