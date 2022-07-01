import React, { useState } from "react";
import "../styles/style.css";

const General = (props) => {
    const [name, setName] = useState("First Last");
    const [email, setEmail] = useState("example@example.com");
    const [phone, setPhone] = useState("123-456");
    const [show, setShow] = useState(1);

    const changeName = (e) => {
        setName(e.target.value);
    }

    const changeEmail = (e) => {
        setEmail(e.target.value);
    }

    const changePhone = (e) => {
        setPhone(e.target.value)
    }

    const toggle = () => {
        if (show === 1) {
            return showGeneral();
        }
        if (show === 0) {
            return editGeneral();
        }
    }

    const onEditClick = (e) => {
        e.preventDefault();
        setShow(0);
    }

    const onSubmitClick = (e) => {
        e.preventDefault();
        setShow(1);
    }

    const showGeneral = () => {
        return (
            <div id="generalContainer" className="section">
                <div id="nameContainer" className="info">
                    <h2 id="nameHeader">{name}</h2>
                </div>
               <div id="contactInfo" className="info">
                    <p>{email}</p>
                    <p>{phone}</p>
                    <div className="buttonContainer">
                        <button onClick={onEditClick}>Edit</button>
                    </div>
               </div>
            </div>
        );
    }

    const editGeneral = () => {
        return (
            <div id="generalContainer" className="section">
                <h2>Personal Details</h2>
                <div className="info">
                    <label htmlFor="name">Name</label>
                    <input
                        onChange={changeName}
                        value={name}
                        type="text"
                        id="name"
                    />
                </div>
                <div className="info">
                    <label htmlFor="email">Email</label>
                    <input
                        onChange={changeEmail}
                        value={email}
                        type="email"
                        id="email"
                    />
                </div>
                <div className="info">
                    <label htmlFor="phone">Phone number</label>
                    <input
                        onChange={changePhone}
                        value={phone}
                        type="tel"
                        id="phone"
                    />
                </div>
                <div className="buttonContainer">
                    <button onClick={onSubmitClick}>Submit</button>
                </div>
            </div>
        );
    }

    return (
        <div>{toggle()}</div>
    );
}

export default General;