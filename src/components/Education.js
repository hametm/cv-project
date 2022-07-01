import React, { Component } from "react";

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.educationInfo;
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

    presentInfo = (e) => {
        e.preventDefault();
        console.log(this.state.school);
        console.log(this.state.major);
        console.log(this.state.startDate);
        console.log(this.state.endDate);
    }

    render() {
        return (
            <div>
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
                <button onClick={this.presentInfo}>Submit</button>

            </div>
        );
    }
}

export default Education;