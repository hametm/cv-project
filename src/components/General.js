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

    handleChangeName = (e) => {
        this.setState({
            userName: e.target.value,
            userEmail: this.state.userEmail,
            userPhone: this.state.userPhone,
        });
    }

    handleChangeEmail = (e) => {
        this.setState({
            userName: this.state.userName,
            userEmail: e.target.value,
            userPhone: this.state.userPhone,
        });
    }

    handleChangePhone = (e) => {
        this.setState({
            userName: this.state.userName,
            userEmail: this.state.userEmail,
            userPhone: e.target.value,
        });
    }

    presentInfo = (e) => {
        e.preventDefault();
        console.log(this.state.userName);
        console.log(this.state.userEmail);
        console.log(this.state.userPhone);
    }

    render() {
        return (
           
            <div>
                <label htmlFor="name">Name</label>
                <input 
                onChange={this.handleChangeName}
                value={this.state.userName}
                type="text" 
                id="name" />
                <label htmlFor="email">Email</label>
                <input 
                onChange={this.handleChangeEmail}
                value={this.state.userEmail}
                type="email" 
                id="email" />
                <label htmlFor="phone">Phone number</label>
                <input 
                onChange={this.handleChangePhone}
                value={this.state.userPhone}
                type="tel" 
                id="phone" />
                <button onClick={this.presentInfo}>Submit</button>
            </div>
        );
    }
}

export default General;