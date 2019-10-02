import React, { Component } from 'react';
import './../style/gayaku.css';
import { Link } from 'react-router-dom';
import Headerin from './Headerin';
import Footer from './Footer';

class Myprofileku2 extends Component 
{
    render() 
    { 
        return (
        <div> 
		<Headerin/>

            {/* profile */}
            <div style={{marginTop: 150}}><center><h1><b>MY PROFILE</b></h1></center></div>
            <div className="container bg-grey" style={{marginTop: 50, borderRadius: 15, padding: 20}}>
            <div className="row">
                <div className="col-sm-4 text-center">
                <img src="images/profile/profile2.jpg" className="img-circle border" width={220} height={204} alt="COFFEES" />     
                </div>
                <div className="col-sm-8">
                {/* ================== */}
                <div className="panel-body apaaja">
                    <div className="row">
                    <table className="table table-striped table-hover">
                        <tbody>
                        <tr>
                            <td>Customer Number:</td>
                            <td>CP100003</td>
                        </tr>
                        <tr>
                            <td>Name:</td>
                            <td>Emma Watson</td>
                        </tr>
                        <tr>
                            <td>Address:</td>
                            <td>Oxfordshire<br />
                            London</td>
                        </tr>
                        <tr>
                            <td>Date of Birth</td>
                            <td>14/03/1990</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>Female</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td><a href="watson@yahoo.com">watson@yahoo.com</a></td>
                        </tr>
                        <tr>
                            <td>Phone Number</td>
                            <td>0874483728742</td> 
                        </tr>
                        </tbody>
                    </table>
                    <a href="./Historyinprofile2" className="btn btncart apaaja" style={{width: '30%'}}>History Invoices</a>
                    <a href=" " className="btn btncart apaaja" style={{width: '30%'}}><i className="glyphicon glyphicon-edit" /> Edit Profile</a>
                    <a href=" " className="btn btncart apaaja" style={{width: '30%'}}><i className="glyphicon glyphicon-remove" /> Delete Profile</a>
                    </div>
                </div>
                {/* ================================= */}
                </div>
            </div>
            </div>
			
		<Footer/>
        </div>
        );
    }
} export default Myprofileku2;