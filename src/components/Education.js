import React, { Component } from "react";

class Education extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <label htmlFor="school">University</label>
                <input type="text" id="school" />
                <label htmlFor="major">Major</label>
                <input type="text" id="major" />
                <label htmlFor="studyDates">Dates of study</label>
                <input type="date" id="studyDates" />
            </div>
        );
    }
}

export default Education;