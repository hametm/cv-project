import React, { Component } from "react";

class Practical extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <label htmlFor="company">Company</label>
                <input type="text" id="company" />
                <label htmlFor="position">Position</label>
                <input type="text" id="position" />
                <label htmlFor="company">Company</label>
                <input type="text" id="company" />
                <label htmlFor="companyDates">Dates worked</label>
                <input type="date" id="companyDates" />
            </div>
        );
    }
}

export default Practical;