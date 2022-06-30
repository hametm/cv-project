import React, { Component } from "react";

class General extends Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            userEmail: "",
            userPhone: "",
        }
    }

    handleChange = (e) => {
        this.setState({
            userName: e.target.value,
            userEmail: "",
            userPhone: "",
        });
       console.log(this.state.userName);
    }

    presentInfo = (e) => {
        e.preventDefault();
        console.log(this.state.userName);
    }

    render() {
        return (
           
            <div>
                <label htmlFor="name">Name</label>
                <input 
                onChange={this.handleChange}
                value={this.state.userName}
                type="text" id="name" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
                <label htmlFor="phone">Phone number</label>
                <input type="tel" id="phone" />
                <button onClick={this.presentInfo}>Submit</button>
            </div>
        );
    }
}

export default General;