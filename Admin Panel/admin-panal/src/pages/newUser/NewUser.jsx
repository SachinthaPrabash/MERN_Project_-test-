import React, { useState } from 'react';
import './newUser.css';
import axios from "axios";

export default function NewUser() {

    const [userName, setUserName] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [tell, setTell] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [active, setActive] = useState("");

    function CreateUser(e) {
        e.preventDefault();

        const newUser = {
            userName, fullName, email, password, tell, address, gender, active
        }

        axios.post("http://localhost:8080/user/add", newUser).then(() => {
            alert("User Added");
        }).catch((err) => {
            alert(err);
        })
    }

    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form onSubmit={CreateUser} className="newUserForm">
                <div className="newUserItem">
                    <label > User Name</label>
                    <input type="text" placeholder="sachintha" onChange={(e) => {
                        setUserName(e.target.value);
                    }} />
                </div>
                <div className="newUserItem">
                    <label > Full Name</label>
                    <input type="text" placeholder="sachintha.p" onChange={(e) => {
                        setFullName(e.target.value);
                    }} />
                </div>
                <div className="newUserItem">
                    <label > Email </label>
                    <input type="text" placeholder="sachintha@gmail.com" onChange={(e) => {
                        setEmail(e.target.value);
                    }} />
                </div>
                <div className="newUserItem">
                    <label > Password </label>
                    <input type="text" placeholder="password" onChange={(e) => {
                        setPassword(e.target.value);
                    }} />
                </div>
                <div className="newUserItem">
                    <label > Telephone No.</label>
                    <input type="text" placeholder="+94 77 123 456" onChange={(e) => {
                        setTell(e.target.value);
                    }} />
                </div>
                <div className="newUserItem">
                    <label > Address </label>
                    <input type="text" placeholder="Colombo" onChange={(e) => {
                        setAddress(e.target.value);
                    }} />
                </div>
                <div className="newUserItem">
                    <label > Gender </label>
                    <div className="newUserGenderContainer">
                        <input type="radio" name="gender" id="male" value="male" onChange={(e) => {
                            setGender(e.target.value);
                        }} />
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" onChange={(e) => {
                            setGender(e.target.value);
                        }} />
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other" onChange={(e) => {
                            setGender(e.target.value);
                        }} />
                        <label for="other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label> Active </label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes" onChange={(e) => {
                            setActive(e.target.value);
                        }}>Yes</option>
                        <option value="no" onChange={(e) => {
                            setActive(e.target.value);
                        }}>No</option>
                    </select>
                </div>
                <div className="buttonDown">
                    <button type="submit" className="newUserButton">Create</button>
                </div>
            </form>
        </div>
    )
}
