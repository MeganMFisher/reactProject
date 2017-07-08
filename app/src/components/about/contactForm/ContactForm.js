import React, { Component } from 'react';
import './contactForm.css';

class ContactForm extends Component {

    constructor() {
        super()

          this.state = {
            formValues: {}
        }

         this.handleChange = this.handleChange.bind(this)
         this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        event.preventDefault();
        let formValues = this.state.formValues;
        let name = event.target.name;
        let value = event.target.value;

        formValues[name] = value;

        this.setState({formValues})
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.formValues);
    }

        render(){
        return (
            <div className='contactFormSection'>
                <h1>Contact Us</h1>
                <form onSubmit={ this.handleSubmit } className='contactUsBox'>

                        <input type="text" name="firstname" placeholder="Firstname" value={this.state.formValues["firstname"]} onChange={ this.handleChange } />

                        <input type="text" name="lastname" placeholder="Lastname" value={this.state.formValues["lastname"]} onChange={ this.handleChange }/>

                        <input type="text" name="email" placeholder="Email Address" value={this.state.formValues["email"]} onChange={ this.handleChange } />

                        <input type="text" name="phone" placeholder="Phone Number" value={this.state.formValues["phone"]} onChange={ this.handleChange }/>

                         <input type="text" name="comment" placeholder="Comment" value={this.state.formValues["comment"]} onChange={ this.handleChange }/>

                        <input className='button' type="submit" value="Submit" />
                </form>
           </div>
      )
    }
}

export default ContactForm;