import React, { Component } from "react";

class Practical extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.practicalInfo;
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
                <button onClick={this.presentInfo}>Submit</button>
            </div>
        );
    }
}

export default Practical;