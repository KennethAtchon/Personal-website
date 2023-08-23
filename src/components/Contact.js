import React, {Component} from 'react';
import './Contact.css';
import { Button } from './Button';
import {API } from 'aws-amplify'

async function fetchClient(data){
  console.log(data);

    API.post("theApi", "/client", data).then(response => {
      console.log(`Respone: ${response.success}`)
      console.log("Successful")
      })
      .catch(error => {
        console.log(error.response);
      })
}



class Contact extends Component{

  

  state = {
    name: '',
    email: '',
    message: '',
    sent: false
  }

  handleName= (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleEmail= (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handleMessage= (e) => {
    this.setState({
      message: e.target.value
    })
  }

  formSubmit = (e) => {
    e.preventDefault();

    if(this.state.name === "" || this.state.email === "" || this.state.message === ""){
      this.resetForm();
      return;
    } 

    // let data = {

    //   name: this.state.name,
    //   email: this.state.email,
    //   message: this.state.message

    // }

    const data = { body: { items: [`${this.state.name}`, `${this.state.email}`, `${this.state.message}`] } }

    fetchClient(data);
    this.setState({
      sent: true,
    })

    this.resetForm();
  
      // API
      // .post("myapi", "/client/api/forma", {data}).then(response => {
      //   this.setState({
      //     sent: true,
  
      //   },this.resetForm())
      //   console.log(`Respone: ${response}`)
      // })
      // .catch(error => {
      //   console.log(error.response);
      // })
  }
  
  resetForm = () => {
    this.setState({
      name: '',
      email: '',
      message: ''
    })

    setTimeout(() => {
      this.setState({
        sent: false,
      })
    }, 3000)
  }


  render(){

    return (
        <div className='contact-container' id='contact'>
          <h1>CONTACT
          </h1>
        <form onSubmit={this.formSubmit}>
        <div className="contact-box">
        <p>Name</p>
        <input className="contact-name" placeholder="Enter your name..." type="text" name="name" value={this.state.name} onChange={this.handleName}></input>

        <p>Email</p>
        <input className="contact-email" placeholder="Enter your email..." type="text" name="email" value={this.state.email} onChange={this.handleEmail}></input>


        <p>Message</p>
        <textarea className="contact-message" placeholder="Enter your message..." type="text" name="message" value={this.state.message} onChange={this.handleMessage}></textarea>

        <div className="contact-button">
        <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
              type="submit"
            >
             Submit
            </Button>
            </div>

            <div className={ this.state.sent ?'sent-appear': 'sent-gone'}>Success! Sent the email.</div>


            {/* post website on github */}

        </div>
        </form>
        </div>
        
      );
    }
  }
  
  export default Contact;