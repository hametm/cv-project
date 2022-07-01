import React, { Component } from "react";
import "../styles/style.css";

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            school: "",
            major: "",
            startDate: "",
            endDate: "",
            show: 1,
        }
    }

    changeSchool = (e) => {
        this.setState({
            school: e.target.value,
        });
    }

    changeMajor = (e) => {
        this.setState({
            major: e.target.value,
        });
    }

    changeStartDate = (e) => {
        this.setState({
            startDate: e.target.value,
        });
    }

    changeEndDate = (e) => {
        this.setState({
            endDate: e.target.value,
        });
    }

    toggle = () => {
        if (this.state.show === 1) {
            return this.showEducation();
        }
        if (this.state.show === 0) {
            return this.editEducation();
        }
    }

    onEditClick = (e) => {
        e.preventDefault();
        this.setState({
            show: 0,
        });
    }

    showEducation = () => {
        return (
            <div id="educationContainer" className="section">
                <h2>Education</h2>
                <div className="buttonContainer">
                    <button onClick={this.onEditClick}>Edit</button>
                </div>
                <p>{this.state.school}</p>
                <p>{this.state.major}</p>
                <p>{this.state.startDate}</p>
                <p>{this.state.endDate}</p>
            </div>
        );
    }

    editEducation = () => {
        return (
            <div id="educationContainer" className="section">
                <h2>Education</h2>
                <div className="info">
                    <label htmlFor="school">University</label>
                    <input
                        onChange={this.changeSchool}
                        value={this.state.school}
                        type="text"
                        id="school"
                    />
                </div>
                <div className="info">
                    <label htmlFor="major">Major</label>
                    <input
                        onChange={this.changeMajor}
                        value={this.state.major}
                        type="text"
                        id="major"
                    />
                </div>
                <div className="info">
                    <label htmlFor="startDate">Start date</label>
                    <input
                        onChange={this.changeStartDate}
                        value={this.state.startDate}
                        type="date"
                        id="startDate"
                    />
                </div>
                <div className="info">
                    <label htmlFor="endDate">End date</label>
                    <input
                        onChange={this.changeEndDate}
                        value={this.state.endDate}
                        type="date"
                        id="endDate"
                    />
                </div>
                <div className="buttonContainer">
                    <button onClick={this.onSubmitClick}>Submit</button>
                </div>
            </div>
        );
    }

    onSubmitClick = (e) => {
        e.preventDefault();
        this.setState({
            show: 1,
        });
    }

    render() {
        return (
            <div>{this.toggle()}</div>
        );
    }
}

export default Education;