import React, {useState} from 'react';

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
            <input {...inputProps} onChange={onChange} required onBlur={handleFocus} onFocus={() =>inputProps.name ==="confirmPassword" && setFocused(true)} focused={focused.toString()}/>
            <span>{errorMessege}</span>
        </div>
    );
}

export default InputText;