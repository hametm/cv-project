import React, { useState } from "react";
import "../styles/style.css";

function Education(props) {
    const [school, setSchool] = useState("");
    const [major, setMajor] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [show, setShow] = useState(1);

    const changeSchool = (e) => {
        setSchool(e.target.value);
    }

    const changeMajor = (e) => {
        setMajor(e.target.value);
    }

    const changeStartDate = (e) => {
        setStartDate(e.target.value);
    }

    const changeEndDate = (e) => {
        setEndDate(e.target.value);
    }

    const toggle = () => {
        if (show === 1) {
            return showEducation();
        }
        if (show === 0) {
            return editEducation();
        }
    }

    const onEditClick = (e) => {
        e.preventDefault();
        setShow(0);
    }

    const showEducation = () => {
        return (
            <div id="educationContainer" className="section">
                <h2>Education</h2>
                <div className="buttonContainer">
                    <button onClick={onEditClick}>Edit</button>
                </div>
                <p>{school}</p>
                <p>{major}</p>
                <p>{startDate}</p>
                <p>{endDate}</p>
            </div>
        );
    }

    const editEducation = () => {
        return (
            <div id="educationContainer" className="section">
                <h2>Education</h2>
                <div className="info">
                    <label htmlFor="school">University</label>
                    <input
                        onChange={changeSchool}
                        value={school}
                        type="text"
                        id="school"
                    />
                </div>
                <div className="info">
                    <label htmlFor="major">Major</label>
                    <input
                        onChange={changeMajor}
                        value={major}
                        type="text"
                        id="major"
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

export default Education;