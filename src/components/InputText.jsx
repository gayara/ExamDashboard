import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.css"

import PropTypes from 'prop-types';

InputText.propTypes = {

};

function InputText(props) {
    const [focused,setFocused] = useState(false);
    const [isRequired, setRequired] = useState(true);
    const [isMatching, setIsMatching] = useState(true);
    const [isCorrect, setIsCorrect] = useState(false);

    const {colSize,label, id, required,pattern, ...inputProps} = props;
    const handleFocus = (e)=> {
        setFocused(true)
    };
    let [errorMessage,setErrorMessage]= useState("Error.");
    let regEx= new RegExp(pattern);

    const onChange = (e) => {
      let val = e.target.value;
      if(val.trim().length == 0){
          setErrorMessage={label}+" is empty.";
          setIsCorrect(true);
      }else if(!(regEx.test(val))){
          setErrorMessage={label}+" is not in correct format.";
          setIsCorrect(true);
      }else {
          setIsCorrect(false);
      }
    }
    return (
            <div className={colSize}>
                <Form.Group controlId={""}>
                    <Form.Label htmlFor={id}>{label}</Form.Label>
                    <Form.Control{...inputProps} onSubmit={onChange} required={required}/>
                    <Form.Control.Feedback hidden={!isCorrect} type={"invalid"}>{errorMessage}</Form.Control.Feedback>
                    <Form.Control.Feedback hidden={isCorrect}>{label} looks good.</Form.Control.Feedback>
                </Form.Group>
            </div>
    );
}

export default InputText;