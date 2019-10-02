import React, { Component } from 'react';
import './../style/gayaku.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class Signup extends Component 
{
    render() 
    { 
        return (
        <div> 
		<Header/>

            {/* bikin signup */}
            <div className="container" style={{marginTop: 150}}>
                <h1><b>Sign Up</b></h1>
                <hr />
                <form>
                <div className="col-sm-3" />
                <div className="col-sm-6">
                    <p>Please fill in this form to create an account.</p>
                    <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" placeholder="Enter email" className="form-control" name="email" required />
                    </div>
                    <div className="form-group">
                    <label htmlFor="psw">Password:</label>
                    <input type="password" placeholder="Enter password" className="form-control" name="psw" required />
                    </div>
                    <div className="form-group">
                    <label htmlFor="psw-repeat">Repeat Password:</label>
                    <input type="password" placeholder="Enter password" className="form-control" name="psw-repeat" required />
                    </div>
                    <label><input type="checkbox" defaultChecked="checked" name="remember" /> Remember me</label>
                    <p>By creating an account you agree to our <a href=" ">Terms&amp;Privacy</a>.</p>
                    <button type="submit" className="btn btncart">Register</button> 
                </div>
                </form>
            </div>
		
        <Footer/>
        </div>
        );
    }
} export default Signup;