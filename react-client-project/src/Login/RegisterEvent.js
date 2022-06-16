import React, { Component } from "react";
import {BrowserRouter as Router, Link, NavLink, Redirect, Route } from "react-router-dom";
import axios from "axios";

class LoginEvent extends Component {
  
    constructor(props) {
        super(props);
            this.state = {
             username: "default",
             email: "default",
             password: "default",            
                        };
            }
  
   handleSubmit = (event) => {
        event.preventDefault();
            const details = {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
               
             };
    
    console.log(details);
    //axios.post("http://localhost:5573/api/users", details)
    
    axios.post("http://localhost:8003/user", details)
      .then((result) => {
            console.log("Event Added Successfully..!!" + result.data);
            })
      .catch((error) => {
        console.log(error);
         });
    };

    handleChange = (event) => {
        event.preventDefault();
            const { name, value } = event.target;
            this.setState({ [name]: value });
            console.log(this.state);
    };

  render() {
    return (
               
        <div class="container">
                <div class="row">
                        <div class="col-sm"></div>
                           
                <div class="col-sm">    
                <br /><br />
                        <h2 className="display-5 fw-bold">Registration Page</h2>
                        <br />
                        
                        <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>Please enter User Name</label>
                                    <input type="text" className="form-control" name="username" required onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Please enter email</label>
                                    <input type="text" className="form-control" name="email" required onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Please enter password</label>
                                    <input type="text" className="form-control" name="password" required onChange={this.handleChange} />
                                </div>
                                
                        <br />
                        <br />
                        <input type="submit" className="btn btn-warning" value="Register"  />           
                    </form>
                    </div>
                    <div class="col-sm"></div>
                </div>
            </div>           
    );
  }
}
export default LoginEvent;