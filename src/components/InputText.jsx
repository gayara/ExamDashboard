import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.css"

import PropTypes from 'prop-types';

InputText.propTypes = {

};

function InputText(props) {
    const [focused,setFocused] = useState(false);

    const {label, errorMessege, onChange, id, ...inputProps} = props;

    const handleFocus = (e)=> {
        setFocused(true)
    };
    return (
        <div>
            <label>{label}</label>
            <input className={"form-control"} {...inputProps} onChange={onChange} required onBlur={handleFocus} />
            <span>{errorMessege}</span>
        </div>
    );
}

export default InputText;