import React, {useState} from 'react';
import InputText from "../../components/InputText";

function Test(props) {
    const[values,setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            id:1,
            name:"username",
            type:"text",
            placeholder:"Username",
            errorMessage:"Username should be 3-16 characters and should't include any special characters!",
            label:"Username",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required:true,

        },

        {
            id:2,
            name:"email",
            type:"email",
            placeholder:"Email",
            errorMessage:"It should be a valid email address!",
            label:"Email",
            required:true,
        },

        {
            id:3,
            name:"birthday",
            type:"date",
            placeholder:"Birthday",
            label:"Birthday"
        },

        {
            id:4,
            name:"password",
            type:"password",
            placeholder:"Password",
            errorMessage:"Password should be 8-20 characters!",
            label:"Password",
            pattern:"^[A-Za-z0-9]{8,20}$",
            required:true,
        },

        {
            id:5,
            name:"confirmPassword",
            type:"password",
            placeholder:"Confirm Password",
            errorMessage:"Passwords don't match!",
            label:"Confirm Password",
            pattern:values.password,
            required:true,
        },
    ];



    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    const onChange = (e) => {
        setValues({...values, [e.target.name]:e.target.value})
    }

    console.log(values);


    return (
        <div className='signUp'>
            <form onSubmit={handleSubmit}>
                <h1>Register Form</h1>
                {inputs.map((input) => (
                    <InputText key={input.id} {...input} values={[input.name]} onChange={onChange}/>
                ))}

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Test;