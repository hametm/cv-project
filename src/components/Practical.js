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
            <div id="practicalContainer">
                <label htmlFor="company">Company</label>
                <p>{this.state.company}</p>
                <label htmlFor="position">Position</label>
                <p>{this.state.position}</p>
                <label htmlFor="responsibilities">Responsibilities</label>
                <p>{this.state.responsibilities}</p>
                <label htmlFor="startDate">Start date</label>
                <p>{this.state.startDate}</p>
                <label htmlFor="endDate">End date</label>
                <p>{this.state.endDate}</p>
                <button onClick={this.onEditClick}>Edit</button>
            </div>
        );
    }

    editPractical = () => {
        return (
            <div>
                <label htmlFor="company">Company</label>
                <input 
                    onChange={this.changeCompany}
                    value={this.state.company}
                    type="text" 
                    id="company" 
                />
                <label htmlFor="position">Position</label>
                <input 
                    onChange={this.changePosition}
                    value={this.state.position}
                    type="text" 
                    id="position" 
                />
                <label htmlFor="responsibilities">Responsibilities</label>
                <input 
                    onChange={this.changeResponsibilities}
                    value={this.state.responsibilities}
                    type="text" 
                    id="responsibilities" 
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

export default Practical;