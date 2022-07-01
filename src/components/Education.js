import React, { Component } from "react";

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
            <div id="educationContainer">
                <label htmlFor="school">School</label>
                <p>{this.state.school}</p>
                <label htmlFor="major">Major</label>
                <p>{this.state.major}</p>
                <label htmlFor="startDate">Start date</label>
                <p>{this.state.startDate}</p>
                <label htmlFor="endDate">End date</label>
                <p>{this.state.endDate}</p>
                <button onClick={this.onEditClick}>Edit</button>
            </div>
        );
    }

    editEducation = () => {
        return (
            <div id="educationContainer">
                <label htmlFor="school">University</label>
                <input 
                    onChange={this.changeSchool}
                    value={this.state.school}
                    type="text" 
                    id="school" 
                />
                <label htmlFor="major">Major</label>
                <input 
                    onChange={this.changeMajor}
                    value={this.state.major}
                    type="text" 
                    id="major" 
                />
                <label htmlFor="startDate">Start date</label>
                <input 
                    onChange={this.changeStartDate}
                    value={this.state.startDate}
                    type="date" 
                    id="startDate" 
                />
                <label htmlFor="endDate">End date</label>
                <input 
                    onChange={this.changeEndDate}
                    value={this.state.endDate}
                    type="date" 
                    id="endDate" 
                />
                <button onClick={this.onSubmitClick}>Submit</button>
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