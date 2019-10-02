import React, { Component } from 'react';
import './../style/gayaku.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class Contact extends Component 
{
    render() 
    { 
        return (
        <div> 
		<Header/>

        {/* bikin contact */}
            <div className="container-fluid" style={{marginLeft: 100, marginRight: 100}}>
                <h2 className="text-center">CONTACT</h2>
                <div className="row">
                <div className="col-sm-5">
                    <p>Contact us and we'll get back to you within 24 hours.</p>
                    <p><span className="glyphicon glyphicon-map-marker" /> Surabaya, East Java</p>
                    <p><span className="glyphicon glyphicon-phone" /> +62 817 653 67 10</p>
                    <p><span className="glyphicon glyphicon-envelope" /> ni.alfianinda@fanmartin.com</p> 
                </div>
                <div className="col-sm-7">
                    <div className="row">
                    <div className="col-sm-6 form-group">
                        <input className="form-control" id="name" name="name" placeholder="Name" type="text" required />
                    </div>
                    <div className="col-sm-6 form-group">
                        <input className="form-control" id="email" name="email" placeholder="Email" type="email" required />
                    </div>
                    </div>
                    <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows={5} defaultValue={""} /><br />
                    <div className="row">
                    <div className="col-sm-12 form-group">
                        <button className="btn btncart pull-right" style={{width: '20%'}}>Send</button>
                    </div>
                    </div> 
                </div>
                </div>
            </div>
			
		<div class="navbar-fixed-bottom">
        <Footer/>
        </div>
        </div>
        );
    }
} export default Contact;