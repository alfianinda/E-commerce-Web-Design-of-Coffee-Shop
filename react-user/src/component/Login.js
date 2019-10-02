import React, { Component } from 'react';
import './../style/gayaku.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


class Login extends Component 
{
    render() 
    { 
        return (
        <div> 
		<Header/>

            {/* bikin login */}
            <div className="container" style={{marginTop: 150}}>
                <h1><b>Login Form</b></h1>
                <hr />
                <form>
                <div className="col-sm-3" />
                <div className="col-sm-6">
                    <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" placeholder="Enter email" className="form-control" name="email" required />
                    </div>
                    <div className="form-group">
                    <label htmlFor="psw">Password:</label>
                    <input type="password" placeholder="Enter password" className="form-control" name="psw" required />
                    </div>
                    <label><input type="checkbox" defaultChecked="checked" name="remember" /> Remember me</label>
                    <button type="submit" className="btn btncart">Login</button>
                    Forgot <a href=" ">password?</a>
                    <p>New Customer?<a href="./Signup"> Register </a>free</p>
                    {/* <br />Login as Admin<a href="loginadmin.html"> Here </a> */}
                </div>   
                </form>
            </div>
			
		<div class="navbar-fixed-bottom">
        <Footer/>
        </div>
        </div>
        );
    }
} export default Login;