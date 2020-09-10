import React, {Component} from 'react'
import NavBar from '../Components/NavBar/NavBar';
import '../styles/ContactPage.scss';

export default class Contact extends Component {
    constructor(){
        super();
        this.state = { 
            contactPage: '', 
            name: 'Name', 
            email: 'email@example.com'
        };
    }

    render(){
    return (
        <div>
        <NavBar/>
            <div className="contact">
            <h1>Contact Us</h1>
            <p className="contact__usPage">Don't see the aircraft you're looking for, or have a picture that you've taken and want to share? Feel free to reach out about us and what we are trying to do; and, we'll see what we can do.</p>
             <div className="contact__usPageImage">?... hello?...</div>
            <form className="contact__form">
                <div className="contact__nameContainer">
                <label>Name: </label>
                <input className="contact__nameInput" placeholder="Name"></input>
                </div>
                <div className="contact__emailContainer">
                <label >E-mail: </label>
                <input className="contact__emailInput" placeholder="E-mail"></input>
                </div>
                <div className="contact__messageContainer">
                <label className="contact__messageLabel">Message: </label>
                <textarea className="contact__messageInput" onChange={this.handleChange} placeholder="Message"></textarea>
                </div>
                <button className="contact__submitButton" onClick={this.handleSubmit}>SUBMIT</button>
            </form>
             </div>
        </div>
    )
}
}
