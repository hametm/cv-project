import React, { Component } from "react";

class General extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            phone: "",
        }
    }

    handleChangeName = (e) => {
        this.setState({
            name: e.target.value,
            email: this.state.email,
            phone: this.state.phone,
        });
    }

    handleChangeEmail = (e) => {
        this.setState({
            name: this.state.name,
            email: e.target.value,
            phone: this.state.phone,
        });
    }

    handleChangePhone = (e) => {
        this.setState({
            name: this.state.name,
            email: this.state.email,
            phone: e.target.value,
        });
    }

    presentInfo = (e) => {
        e.preventDefault();
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.phone);
    }

    render() {
        return (
           
            <div>
                <label htmlFor="name">Name</label>
                <input 
                onChange={this.handleChangeName}
                value={this.state.name}
                type="text" 
                id="name" />
                <label htmlFor="email">Email</label>
                <input 
                onChange={this.handleChangeEmail}
                value={this.state.email}
                type="email" 
                id="email" />
                <label htmlFor="phone">Phone number</label>
                <input 
                onChange={this.handleChangePhone}
                value={this.state.phone}
                type="tel" 
                id="phone" />
                <button onClick={this.presentInfo}>Submit</button>
            </div>
        );
    }
}

export default General;