import axios from 'axios';
import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap'
/**
 * --------------------------------------------------------------------------
 * Registration Component to register a new user on the system
 * 
 * 
 */
class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }
    handleUsernameChange = (event) => {
        this.setState({ name: event.target.value })
    }
    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }
    handleEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }
    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'JWT fefege...'
        }

        axios.post('https://justolearnapp.herokuapp.com/api/users/', this.state, { headers: headers }).then(response => {
            console.log("response", response)
        }).catch(error => {

            console.log("error", error)
        })
    }
    render() {
        return (
            <div>
                <h1>Enter Menu Details</h1>
                <form onSubmit={this.handleSubmit}>
                    <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                        <div class="card card0 border-0">
                            <div class="row d-flex">
                                <div class="col-lg-6">
                                    <div class="card1 pb-5">
                                        <div class="row"> <img src="https://justolearn.com/assets/img/black-justo-logo.png" class="logo" /> </div>
                                        <div class="row px-3 justify-content-center mt-4 mb-5 border-line">
                                            <img src="https://i.imgur.com/uNGdWHi.png" class="image" /> </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="card2 card border-0 px-4 py-5">
                                        <div class="row mb-4 px-3">
                                            <h6 class="mb-0 mr-4 mt-2">Sign in with</h6>
                                            <div class="facebook text-center mr-3">
                                                <div class="fa fa-facebook"></div>
                                            </div>
                                            <div class="twitter text-center mr-3">
                                                <div class="fa fa-twitter"></div>
                                            </div>
                                            <div class="linkedin text-center mr-3">
                                                <div class="fa fa-linkedin"></div>
                                            </div>
                                        </div>
                                        <div class="row px-3 mb-4">
                                            <div class="line"></div> <small class="or text-center">Or</small>
                                            <div class="line"></div>
                                        </div>
                                        <div class="row px-3"> <label class="mb-1">
                                            <h6 class="mb-0 text-sm">Email Address</h6>
                                        </label>


                                            <input class="mb-4" type="text" name="email" placeholder="Enter a valid Name" onChange={this.handleEmailChange} /> </div>
                                        <div class="row px-3"> <label class="mb-1">
                                            <h6 class="mb-0 text-sm">Name</h6>
                                        </label>
                                            <input class="mb-4" type="text" name="password" placeholder="Enter a valid password" onChange={this.handleUsernameChange}/> </div>
                                        <div class="row px-3"> <label class="mb-1">
                                            <h6 class="mb-0 text-sm">Password</h6>
                                        </label> <input type="password" name="password" placeholder="Enter password" onChange={this.handlePasswordChange}/> </div>
                                        <div class="row mb-3 px-3"> <button type="submit" class="btn btn-blue text-center">Register</button> </div>

                                    </div>
                                </div>
                            </div>
                            <div class="bg-blue py-4">
                                <div class="row px-3"> <small class="ml-4 ml-sm-5 mb-2">Copyright &copy; 2019. All rights reserved.</small>
                                    <div class="social-contact ml-4 ml-sm-auto"> <span class="fa fa-facebook mr-4 text-sm"></span> <span class="fa fa-google-plus mr-4 text-sm"></span> <span class="fa fa-linkedin mr-4 text-sm"></span> <span class="fa fa-twitter mr-4 mr-sm-5 text-sm"></span> </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>


        );
    }
}

export default Register;