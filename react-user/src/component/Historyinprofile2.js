import React, { Component } from 'react';
import './../style/gayaku.css';
import { Link } from 'react-router-dom';
import Headerin from './Headerin';
import Footer from './Footer';

class Historyinprofile2 extends Component 
{
    render() 
    { 
        return ( 
        <div>
		    <Headerin/>
        
        <section id="main">
        <div className="container">
          <div className="row" style={{marginTop:50}}>
          
          <div className="col-md-1"></div>
            <div className="col-md-10">   
              {/*Latest User*/}
              <div className="navbar" style={{backgroundColor: 'transparent', color: 'rgb(110, 7, 12)', border: '0.5px solid rgba(128, 128, 128, 0.253)'}}>
                <div className="container-fluid" style={{backgroundColor: 'rgb(110, 7, 12)'}}>
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#head" aria-expanded="false" aria-controls="navbar">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  <div id="head" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                      <li><h4>History Invoices</h4></li>        
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                      <li>
                        <form className="navbar-form">
                          <div className="input-group">
                            <div>
                              <input type="text" className="form-control" placeholder="Search" style={{borderColor: 'transparent', borderRightColor: 'rgb(110, 7, 12)'}} />
                              <select className="form-control" style={{borderRadius: 0, borderColor: 'transparent'}}>
                                {/* <option> by Name </option> */}
                                <option> by Invoice Number </option>
                                <option> by Date of Transaction</option>
                              </select>
                            </div>
                            <div className="input-group-btn">
                              <button className="btn btn-cart bg-apaaja" type="submit">
                                <i className="glyphicon glyphicon-search" />
                              </button>
                            </div>
                          </div>
                        </form>
                      </li>          
                    </ul>
                  </div>
                </div>
                <div className="panel-body" style={{color: 'rgb(110, 7, 12)'}}>
                  <table className="table table-striped table-hover">
                    <tbody><tr>
                        {/* <th>Name</th> */}
                        <th>Invoice Number </th>
                        <th>Date of Transaction</th>
                      </tr>
                      {/* <tr>
          <td><a href="invoice.html" class="cl-apaaja">Ganis Ezra Saputra</a></td>
          <td><a href="invoice.html" class="cl-apaaja">#100001</a></td>
          <td><a href="invoice.html" class="cl-apaaja">30 May 2018</a></td>
        </tr> */}
                      {/* <tr>
          <td><a href="invoice1.html" class="cl-apaaja">Laura</a></td>
          <td><a href="invoice1.html" class="cl-apaaja">#100002</a></td>
          <td><a href="invoice1.html" class="cl-apaaja">30 May 2018</a></td>
        </tr> */}
                      <tr>
                        {/* <td><a href="invoice2.html" class="cl-apaaja">Emma Watson</a></td> */}
                        <td><a href="./Invoice2" className="cl-apaaja">#100003</a></td>
                        <td><a href="./Invoice2" className="cl-apaaja">30 May 2018</a></td>
                      </tr>
                      {/* <tr>
          <td><a href="invoice3.html" class="cl-apaaja">Lily J. Collins</a></td>
          <td><a href="invoice3.html" class="cl-apaaja">#100004</a></td>
          <td><a href="invoice3.html" class="cl-apaaja">30 May 2018</a></td>
        </tr> */}
                    </tbody></table>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
	  
        <div class="navbar-fixed-bottom">
        <Footer/>
        </div>
        </div>
        );
    }
} 

export default Historyinprofile2;