import React, { Component } from 'react';
import './../style/gayaku.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class Cart extends Component 
{
    render() 
    { 
        return (
        <div> 
		    <Header/>

        <div className="col-sm-12 col-md-10 col-md-offset-1">
          <div className="container containercart" style={{marginTop: 50}}>
            <h3> <b>Cart</b> </h3>
            <table className="table table-hover" style={{marginTop: 30}}>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Total</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="col-sm-7 col-md-5">
                    <div className="media">
                      <a className="pull-left" href="./Deskripsicoffeesb"> <img src="images/produk kopi/produkb.jpg" alt="produkb" style={{width: 72, height: 72}} /> </a>
                      <h4 className="media-heading"><a href="./Deskripsicoffeesb">Coffee Beans/Ground, Light Roast,200gr</a></h4>
                      <h5 className="media-heading"> by <a href="./Deskripsicoffeesb">Caffe Espresso</a></h5>
                      <span>Status: </span><span className="text-success"><strong>In Stock</strong></span>
                    </div>
                  </td>
                  <td className="col-sm-1 col-md-1" style={{textAlign: 'center'}}>
                    2
                  </td>
                  <td className="col-sm-3 col-md-3 text-center"><strong>Rp 200.000</strong></td>
                  <td className="col-sm-1 col-md-1 text-center"><strong>Rp 400.000</strong></td>
                  <td className="col-sm-1 col-md-1">
                    <button type="button" className="btn btn-danger">
                      <span className="glyphicon glyphicon-remove" /> Remove
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="col-sm-7 col-md-5">
                    <div className="media">
                      <a className="pull-left" href="./Deskripsicoffeesc"> <img src="images/produk kopi/produkc.jpg" alt="produkc" style={{width: 72, height: 72}} /> </a>
                      <h4 className="media-heading"><a href="./Deskripsicoffeesc">Coffee Beans/Ground, Medium Roast, 100gr</a></h4>
                      <h5 className="media-heading"> by <a href="./Deskripsicoffeesc">Rose Pank</a></h5>
                      <span>Status: </span><span className="text-success"><strong>In Stock</strong></span>
                    </div>
                  </td>
                  <td className="col-sm-1 col-md-1" style={{textAlign: 'center'}}>
                    3
                  </td>
                  <td className="col-sm-3 col-md-3 text-center"><strong>Rp 150.000</strong></td>
                  <td className="col-sm-1 col-md-1 text-center"><strong>Rp 450.000</strong></td>
                  <td className="col-sm-1 col-md-1">
                    <button type="button" className="btn btn-danger">
                      <span className="glyphicon glyphicon-remove" /> Remove
                    </button>
                  </td>
                </tr>
                <tr>
                  <td> &nbsp; </td>
                  <td> &nbsp; </td>
                  <td> &nbsp; </td>
                  <td><h5>Subtotal</h5></td>
                  <td className="text-right"><h5><strong>Rp 850.000</strong></h5></td>
                </tr>
                <tr>
                  <td> &nbsp; </td>
                  <td> &nbsp; </td>
                  <td> &nbsp; </td>
                  <td><h5>Estimated shipping</h5></td>
                  <td className="text-right"><h5><strong>Rp 50.000</strong></h5></td>
                </tr>
                <tr>
                  <td> &nbsp; </td>
                  <td> &nbsp; </td>
                  <td> &nbsp; </td>
                  <td><h4>Total</h4></td>
                  <td className="text-right"><h4><strong>Rp 900.000</strong></h4></td>
                </tr>
              </tbody>
            </table>
            <center>
              <a href="./Products">
                <button type="button" className="btn btncart" style={{width: '40%'}}>
                  <span className="glyphicon glyphicon-shopping-cart" /> Continue Shopping
                </button>
              </a>
            </center>
          </div>
        </div>
        {/* ================================ */}
        <div className="col-sm-12 col-md-10 col-md-offset-1">
          <div className="row rowcart">
            <div className="col-75" style={{marginTop: 40}}>
              <div className="container containercart">
                <form action="/action_page.php">
                  <div className="row rowcart">
                    <div className="col-50">
                      <h3>Billing Address</h3>
                      <label htmlFor="fname"><i className="glyphicon glyphicon-user" /> Full Name</label>
                      <input type="text" id="fname" name="firstname" placeholder="Nur Inna Alfianinda" />
                      <label htmlFor="email"><i className="glyphicon glyphicon-envelope" /> Email</label>
                      <input type="text" id="email" name="email" placeholder="ni.alfianinda@example.com" />
                      <label htmlFor="adr"><i className="fa fa-address-card-o" /> Address</label>
                      <input type="text" id="adr" name="address" placeholder="Jl. Margonda Raya no.8, Kec. Beji, Pondok Cina" />
                      <label htmlFor="city"><i className="fa fa-institution" /> City</label>
                      <input type="text" id="city" name="city" placeholder="Depok" />
                      <div className="row rowcart">
                        <div className="col-50">
                          <label htmlFor="state">State</label>
                          <input type="text" id="state" name="state" placeholder="Indonesia" />
                        </div>
                        <div className="col-50">
                          <label htmlFor="zip">Zip</label>
                          <input type="text" id="zip" name="zip" placeholder={16424} />
                        </div>
                      </div>
                    </div>
                    <div className="col-50">
                      <h3>Payment</h3>
                      <label htmlFor="fname">Accepted Cards</label>
                      <div className="icon-container">
                        <i className="fa fa-cc-visa" style={{color: 'navy', fontSize: 70}} />
                        <i className="fa fa-cc-amex" style={{color: 'blue', fontSize: 70}} />
                        <i className="fa fa-cc-mastercard" style={{color: 'red', fontSize: 70}} />
                        <i className="fa fa-cc-discover" style={{color: 'orange', fontSize: 70}} />
                      </div>
                      <label htmlFor="cname">Name on Card</label>
                      <input type="text" id="cname" name="cardname" placeholder="Nur Inna Alfianinda" />
                      <label htmlFor="ccnum">Credit card number</label>
                      <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                      <label htmlFor="expmonth">Exp Month</label>
                      <input type="text" id="expmonth" name="expmonth" placeholder="September" />
                      <div className="row rowcart">
                        <div className="col-50">
                          <label htmlFor="expyear">Exp Year</label>
                          <input type="text" id="expyear" name="expyear" placeholder={2018} />
                        </div>
                        <div className="col-50">
                          <label htmlFor="cvv">CVV</label>
                          <input type="text" id="cvv" name="cvv" placeholder={352} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <label>
                    <input type="checkbox" defaultChecked="checked" name="sameadr" /> Shipping address same as billing
                  </label>
                </form>
                <center>
                  <a href="./Invoice">
                    <input type="button" defaultValue="Continue to checkout" className="btn btncart" style={{width: '40%'}} />
                  </a>
                </center>
              </div>
            </div>
          </div>
        </div>
		
		    <div class="col-sm-12">
        <Footer/>
        </div>
        </div>
        );
    }
} 

export default Cart;