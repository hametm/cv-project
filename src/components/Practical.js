import React, { Component } from "react";
import "../styles/style.css";

class Practical extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: "",
            position: "",
            responsibilities: "",
            startDate: "",
            endDate: "",
            show: 1,
        }
    }

    changeCompany = (e) => {
        this.setState({
            company: e.target.value,
        });
    }

    changePosition = (e) => {
        this.setState({
            position: e.target.value,
        });
    }

    changeResponsibilities = (e) => {
        this.setState({
            responsibilities: e.target.value,
        });
    }

    changeStartDate = (e) => {
        this.setState({
            startDate: e.target.value,
        });
    }


    changeEndDate = (e) => {
        this.setState({
            endDate: e.target.value
        });
    }

    toggle = () => {
        if (this.state.show === 1) {
            return this.showPractical();
        }
        if (this.state.show === 0) {
            return this.editPractical();
        }
    }

    onEditClick = (e) => {
        e.preventDefault();
        this.setState({
            show: 0,
        });
    }

    showPractical = () => {
        return (
            <div id="practicalContainer" className="section">
                <h2>Employment</h2>
                <div className="buttonContainer">
                    <button onClick={this.onEditClick}>Edit</button>
                </div>
                <p>{this.state.company}</p>
                <p>{this.state.position}</p>
                <p>{this.state.responsibilities}</p>
                <p>{this.state.startDate}</p>
                <p>{this.state.endDate}</p>
            </div>
        );
    }

    editPractical = () => {
        return (
            <div id="practicalContainer" className="section">
                <h2>Employment</h2>
                <div className="info">
                    <label htmlFor="company">Company</label>
                    <input
                        onChange={this.changeCompany}
                        value={this.state.company}
                        type="text"
                        id="company"
                    />
                </div>
                <div className="info">
                    <label htmlFor="position">Position</label>
                    <input
                        onChange={this.changePosition}
                        value={this.state.position}
                        type="text"
                        id="position"
                    />
                </div>
                <div className="info">
                    <label htmlFor="responsibilities">Responsibilities</label>
                    <input
                        onChange={this.changeResponsibilities}
                        value={this.state.responsibilities}
                        type="text"
                        id="responsibilities"
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

export default Practical;