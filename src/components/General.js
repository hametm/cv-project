import React, { Component } from "react";
import "../styles/style.css";

class General extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "First Last",
            email: "example@example.com",
            phone: "123-456",
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

    onSubmitClick = (e) => {
        e.preventDefault();
        this.setState({
            show: 1,
        });
        
    }

    showGeneral = () => {
        return (
            <div id="generalContainer" className="section">
                <div id="nameContainer" className="info">
                    <h2 id="nameHeader">{this.state.name}</h2>
                </div>
               <div id="contactInfo" className="info">
                    <p>{this.state.email}</p>
                    <p>{this.state.phone}</p>
                    <div className="buttonContainer">
                        <button onClick={this.onEditClick}>Edit</button>
                    </div>
               </div>
            </div>
        );
    }

    editGeneral = () => {
        return (
            <div id="generalContainer" className="section">
                <h2>Personal Details</h2>
                <div className="info">
                    <label htmlFor="name">Name</label>
                    <input
                        onChange={this.changeName}
                        value={this.state.name}
                        type="text"
                        id="name"
                    />
                </div>
                <div className="info">
                    <label htmlFor="email">Email</label>
                    <input
                        onChange={this.changeEmail}
                        value={this.state.email}
                        type="email"
                        id="email"
                    />
                </div>
                <div className="info">
                    <label htmlFor="phone">Phone number</label>
                    <input
                        onChange={this.changePhone}
                        value={this.state.phone}
                        type="tel"
                        id="phone"
                    />
                </div>
                <div className="buttonContainer">
                    <button onClick={this.onSubmitClick}>Submit</button>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>{this.toggle()}</div>
        );
    }
}

export default General;