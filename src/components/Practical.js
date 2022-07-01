import React, { useState } from "react";
import "../styles/style.css";

const Practical = (props) => {
    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [responsibilities, setResponsibilities] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [show, setShow] = useState(1);

    const changeCompany = (e) => {
        setCompany(e.target.value);
    }

    const changePosition = (e) => {
        setPosition(e.target.value);
    }

    const changeResponsibilities = (e) => {
        setResponsibilities(e.target.value);
    }

    const changeStartDate = (e) => {
        setStartDate(e.target.value);
    }


    const changeEndDate = (e) => {
        setEndDate(e.target.value);
    }

    const toggle = () => {
        if (show === 1) {
            return showPractical();
        }
        if (show === 0) {
            return editPractical();
        }
    }

    const onEditClick = (e) => {
        e.preventDefault();
        setShow(0);
    }

    const showPractical = () => {
        return (
            <div id="practicalContainer" className="section">
                <h2>Employment</h2>
                <div className="buttonContainer">
                    <button onClick={onEditClick}>Edit</button>
                </div>
                <p>{company}</p>
                <p>{position}</p>
                <p>{responsibilities}</p>
                <p>{startDate}</p>
                <p>{endDate}</p>
            </div>
        );
    }

    const editPractical = () => {
        return (
            <div id="practicalContainer" className="section">
                <h2>Employment</h2>
                <div className="info">
                    <label htmlFor="company">Company</label>
                    <input
                        onChange={changeCompany}
                        value={company}
                        type="text"
                        id="company"
                    />
                </div>
                <div className="info">
                    <label htmlFor="position">Position</label>
                    <input
                        onChange={changePosition}
                        value={position}
                        type="text"
                        id="position"
                    />
                </div>
                <div className="info">
                    <label htmlFor="responsibilities">Responsibilities</label>
                    <input
                        onChange={changeResponsibilities}
                        value={responsibilities}
                        type="text"
                        id="responsibilities"
                    />
                </div>
                <div className="info">
                    <label htmlFor="startDate">Start date</label>
                    <input
                        onChange={changeStartDate}
                        value={startDate}
                        type="date"
                        id="startDate"
                    />
                </div>
                <div className="info">
                    <label htmlFor="endDate">End date</label>
                    <input
                        onChange={changeEndDate}
                        value={endDate}
                        type="date"
                        id="endDate"
                    />
                </div>
                <div className="buttonContainer">
                    <button onClick={onSubmitClick}>Submit</button>
                </div>
            </div>
        );
    }

    const onSubmitClick = (e) => {
        e.preventDefault();
        setShow(1);
    }

    return (
        <div>{toggle()}</div>
    );
}

export default Practical;