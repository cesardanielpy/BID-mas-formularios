import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [errorFirstName, seterrorFirstName] = useState("");
    const [lastname, setLastname] = useState("");
    const [errorLastName, seterrorLastName] = useState("")
    const [email, setEmail] = useState("");
    const [errorEmail, seterrorEmail] = useState("")
    const [password, setPassword] = useState("");
    const [errorPassword, seterrorPassword] = useState("")
    const [confpassword, setConfpassword] = useState("");
    const [errorConfPassword, seterrorConfPassword] = useState("")
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(true);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstname, lastname, email, password };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( password === confpassword );
    };

    const handleFirstName = (e) => {
    setFirstname(e.target.value);
    if(e.target.value.length < 2){
        seterrorFirstName("El campo tiene menos de 2 caracteres.");
    }
    else{
        seterrorFirstName("");
    }
    }

    const handleLastName = (e) => {
    setLastname(e.target.value);
    if(e.target.value.length < 2){
        seterrorLastName("El campo tiene menos de 2 caracteres.")
    }
    else{
        seterrorLastName("");
    }

    }
    const handleEmail = (e) => {
    setEmail(e.target.value);
    if(e.target.value.length < 5){
        seterrorEmail("El campo tiene menos de 5 caracteres.")
    }
    else{
        seterrorEmail("");
    }

    }

    const handlePassword = (e) => {
    setPassword(e.target.value);
    if(e.target.value.length < 8){
        seterrorPassword("El campo tiene menos de 8 caracteres.");
    }
    else{
        seterrorPassword("");
    }
    }
    const handleErrorConfPassword = (e) => {
    setConfpassword(e.target.value);
        if(e.target.value.length < 8){
            seterrorConfPassword("El campo tiene menos de 8 caracteres.");
        }
        else{
            seterrorConfPassword("");
        }
    }


    return (
        <form onSubmit={createUser}>
            <div>
                <label>First Name: </label>
                <input value={firstname} type="text" onChange={handleFirstName} />
                {
                    errorFirstName ? <p>{errorFirstName}</p> : ''
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input value={lastname} type="text" onChange={handleLastName} />
                {
                    errorLastName ? <p>{errorLastName}</p> : ''
                }
            </div>
            <div>
                <label>Email: </label>
                <input value={email} type="text" onChange={handleEmail} />
                {
                    errorEmail ? <p>{errorEmail}</p> : ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input value={password} type="text" onChange={handlePassword} />
                {
                    errorPassword ? <p>{errorPassword}</p> : ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input value={confpassword} type="text" onChange={handleErrorConfPassword} />
                {
                    errorConfPassword ? <p>{errorConfPassword}</p> : ''
                }
                {
                    hasBeenSubmitted && <p>No coinciden los campos</p>
                }
            </div>
            
            <input type="submit" value="Create User" />
        </form>
    );
};

export default UserForm;