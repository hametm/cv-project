import React, { Component } from "react";

class General extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            show: 1,
        }
    }

    changeName = (e) => {
        this.setState({
            name: e.target.value,
        });
    }

    changeEmail = (e) => {
        this.setState({
            email: e.target.value,
        });
    }

    changePhone = (e) => {
        this.setState({
            phone: e.target.value,
        });
    }

    toggle = () => {
        if (this.state.show === 1) {
            return this.showGeneral();
        }
        if (this.state.show === 0) {
            return this.editGeneral();
        }
    }

    onEditClick = (e) => {
        e.preventDefault();
        this.setState({
            show: 0,
        });
    }

    showGeneral = () => {
        return (
            <div id="generalContainer">
                <label htmlFor="name">Name</label>
                <p>{this.state.name}</p>
                <label htmlFor="email">Email</label>
                <p>{this.state.email}</p>
                <label htmlFor="phone">Phone number</label>
                <p>{this.state.phone}</p>
                <button onClick={this.onEditClick}>Edit</button>
            </div>
        );
    }

    editGeneral = () => {
        return (
            <div id="generalContainer">
                <label htmlFor="name">Name</label>
                <input 
                    onChange={this.changeName}
                    value={this.state.name}
                    type="text" 
                    id="name" 
                />
                <label htmlFor="email">Email</label>
                <input 
                    onChange={this.changeEmail}
                    value={this.state.email}
                    type="email" 
                    id="email" 
                />
                <label htmlFor="phone">Phone number</label>
                <input 
                    onChange={this.changePhone}
                    value={this.state.phone}
                    type="tel" 
                    id="phone" 
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

export default General;