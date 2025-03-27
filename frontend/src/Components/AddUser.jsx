import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddUser=()=>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate()
    function Add(){
        if(!name || !email || !password){
            alert("All Fields Are Required");
        }
        const newUser={
            "name":name,
            "email":email,
            "password":password
        }
        axios.post('http://localhost:3010/users/',newUser)
        .then(response=>{
            console.log(response)
            navigate('/')
        }).catch(error=>console.error('There was an error adding user:',error));
    }
    return(
        <div>
            <h1>Add User</h1>
            <form action="">
                <label htmlFor="">Name :</label>
                <input type="text" onChange={(e)=>setName(e.target.value)} /> <br />
                <label htmlFor="">Email :</label>
                <input type="text" onChange={(e)=>setEmail(e.target.value)} /> <br />
                <label htmlFor="">Password :</label>
                <input type="text" onChange={(e)=>setPassword(e.target.value)} /> <br />
                <input type="button" value="Submit" onClick={Add} />
            </form>
        </div>
    )
};
export default AddUser;