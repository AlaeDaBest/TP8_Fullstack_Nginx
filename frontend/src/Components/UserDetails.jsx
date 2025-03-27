import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const UserDetails=()=>{
    const [user,setUser]=useState({});
    const {id}=useParams();
    useEffect(()=>{
        axios.get(`http://localhost:3010/users/${id}`)
        .then(response=>{
            console.log(response);
            setUser(response.data);
        })
    },[]);
    return(
        <div>
            <h1>Details</h1>
            <p><b>Id :</b> {user._id} </p>
            <p><b>Name :</b> {user.name} </p>
            <p><b>Email :</b> {user.email} </p>
            <p><b>Password :</b> {user.password} </p>
        </div>
    )
}
export default UserDetails;