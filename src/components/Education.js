import React, { Component } from "react";

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            school: "",
            major: "",
            dates: "",
        }
    }

    handleChangeSchool = (e) => {
        this.setState({
            school: e.target.value,
            major: this.state.major,
            dates: this.state.dates,
        });
    }

    handleChangeMajor = (e) => {
        this.setState({
            school: this.state.school,
            major: e.target.value,
            dates: this.state.dates,
        });
    }

    handleChangeDates = (e) => {
        this.setState({
            school: this.state.school,
            major: this.state.major,
            dates: e.target.value,
        });
    }

    presentInfo = (e) => {
        e.preventDefault();
        console.log(this.state.school);
        console.log(this.state.major);
        console.log(this.state.dates);
    }

    render() {
        return (
            <div>
                <label htmlFor="school">University</label>
                <input 
                    onChange={this.handleChangeSchool}
                    value={this.state.school}
                    type="text" 
                    id="school" 
                />
                    <label htmlFor="major">Major</label>
                <input 
                    onChange={this.handleChangeMajor}
                    value={this.state.major}
                    type="text" 
                    id="major" 
                />
                <label htmlFor="studyDates">Dates of study</label>
                <input 
                    onChange={this.handleChangeDates}
                    value={this.state.dates}
                    type="date" 
                    id="studyDates" 
                />
                <button onClick={this.presentInfo}>Submit</button>

            </div>
        );
    }
}

export default Education;