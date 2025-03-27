import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
const UsersList=()=>{
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3010/users/')
        .then(response=>{
            console.log(response)
            setUsers(response.data);
        })
     },[])
    function HandleDeleteUser(id){
        axios.delete(`http://localhost:3010/users/${id}`);
        const filteredUsers=users.filter(user=>user._id!=id);
        setUsers(filteredUsers);
    }
    return(
        <div>
            <h1>List</h1>
            <Link to='/add'>Add User</Link>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                {users.map((user) => (
                <tr key={user._id}>
                    <td>{user.name} </td>
                    <td>{user.email}</td>
                    <td>
                        <Link to={`/${user._id}`}>Details</Link>
                        <button onClick={() => HandleDeleteUser(user._id)}>Delete</button>
                    </td>
                </tr>
                ))}
            </table>
        </div>
    )
};
export default UsersList;