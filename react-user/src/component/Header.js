import React, { Component } from 'react';
import './../style/gayaku.css';

class Header extends Component 
{
    render() 
    { 
        return ( 
        <div>
          {/* bikin navbar */}
          <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
              <a className="navbar-brand" href="./"><img src="images/logo/logo.jpg" alt="logo" className="img-responsive border" style={{height: 120, width: 270, borderRadius: 15, borderWidth: 4, borderTopColor: 'black', borderRightColor: 'black', borderLeftColor: 'black'}} /></a>
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#Navbar">
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div className="collapse navbar-collapse" id="Navbar">
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="./Cart"><span className="glyphicon glyphicon-shopping-cart" /> Cart</a></li> 
                  <li><a href="./Signup"><span className="glyphicon glyphicon-user" /> Sign Up</a></li>
                  <li><a href="./Login"><span className="glyphicon glyphicon-log-in" /> Login</a></li>
                </ul>
              </div>
            </div>
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <form className="navbar-form navbar-left">
                      <div className="input-group">
                        <div>
                          <input type="text" className="form-control" placeholder="Search" style={{borderColor: 'transparent', borderRightColor: 'rgb(110, 7, 12)'}} />
                          <select className="form-control" style={{borderRadius: 0, borderColor: 'transparent'}}>
                            <option> All Products </option>
                            <option> Coffees </option>
                            <option> Teas </option>
                            <option> Equipment </option>
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
                  <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="./Products">Product Categories
                      <span className="caret" /></a>
                    <ul className="dropdown-menu">
                      <li><a href="./Products">All Products</a></li>
                      <li><a href="./Coffees">Coffees</a></li>
                      <li><a href="./Teas">Teas</a></li>
                      <li><a href="./Equipment">Equipment</a></li> 
                    </ul>
                  </li>
                  <li><a href="./Update">News &amp; Updates</a></li>
                  <li><a href="./About">About FanMartin</a></li>
                  <li><a href="./Contact">Contact</a></li>  
                </ul>
              </div> 
            </div>
          </nav>
        </div>
        );
    }
} 

export default Header;