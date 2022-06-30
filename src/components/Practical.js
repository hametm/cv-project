import React, { Component } from "react";

class Practical extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: "",
            position: "",
            responsibilities: "",
            startDate: "",
            endDate: "",
        }
    }

    handleChangeCompany = (e) => {
        this.setState({
            company: e.target.value,
            position: this.state.position,
            responsibilities: this.state.responsibilities,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
        });
    }

    handleChangePosition = (e) => {
        this.setState({
            company: this.state.company,
            position: e.target.value,
            responsibilities: this.state.responsibilities,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
        });
    }

    handleChangeResponsibilities = (e) => {
        this.setState({
            company: this.state.company,
            position: e.target.value,
            responsibilities: e.target.value,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
        });
    }

    handleChangeStartDate = (e) => {
        this.setState({
            company: this.state.company,
            position: this.state.position,
            responsibilities: this.state.responsibilities,
            startDate: e.target.value,
            endDate: this.state.endDate,
        });
    }


    handleChangeEndDate = (e) => {
        this.setState({
            company: this.state.company,
            position: this.state.position,
            responsibilities: this.state.responsibilities,
            startDate: this.state.startDate,
            endDate: e.target.value
        });
    }

    presentInfo = (e) => {
        e.preventDefault();
        console.log(this.state.company);
        console.log(this.state.position);
        console.log(this.state.responsibilities);
        console.log(this.state.startDate);
        console.log(this.state.endDate);
    }

    render() {
        return (
            <div>
                <label htmlFor="company">Company</label>
                <input 
                    onChange={this.handleChangeCompany}
                    value={this.state.company}
                    type="text" 
                    id="company" 
                />
                <label htmlFor="position">Position</label>
                <input 
                    onChange={this.handleChangePosition}
                    value={this.state.position}
                    type="text" 
                    id="position" 
                />
                <label htmlFor="responsibilities">Responsibilities</label>
                <input 
                    onChange={this.handleChangeResponsibilities}
                    value={this.state.responsibilities}
                    type="text" 
                    id="responsibilities" 
                />
                <label htmlFor="startDate">Start date</label>
                <input
                    onChange={this.handleChangeStartDate}
                    value={this.state.startDate} 
                    type="date" 
                    id="startDate" 
                />
                <label htmlFor="endDate">End date</label>
                <input 
                    onChange={this.handleChangeEndDate}
                    value={this.state.endDate}
                    type="date" 
                    id="endDate" 
                />
                <button onClick={this.presentInfo}>Submit</button>
            </div>
        );
    }
}

export default Practical;