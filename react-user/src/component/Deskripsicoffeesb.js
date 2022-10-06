import React, { Component } from 'react';
import './../style/gayaku.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class Deskripsicoffeesb extends Component 
{
    render() 
    { 
        return ( 
        <div>
		<Header/>

            {/* bikin deskripsi produk */}
            <div className="card">
                <div className="row">
                <aside className="col-sm-5 text-center">
                    <article className="gallery-wrap"> 
                    <div className="img-big-wrap">
                        <div><img src="images/produk kopi/produkb.jpg" alt="produkb"/></div>
                    </div> 
                    {/* slider-product.// */}
                    <div className="img-small-wrap">
                        <div className="item-gallery"> <img src="images/produk kopi/produkb.jpg" alt="produkb"/> </div>
                        <div className="item-gallery"> <img src="images/produk kopi/produkb.jpg" alt="produkb"/> </div>
                        <div className="item-gallery"> <img src="images/produk kopi/produkb.jpg" alt="produkb"/> </div>
                        <div className="item-gallery"> <img src="images/produk kopi/produkb.jpg" alt="produkb"/> </div>
                    </div> 
                    </article> 
                </aside>
                <aside className="col-sm-7">
                    <article>
                    <h3>Caffe Espresso</h3>
                    <p> 
                    </p><div className="h4">
                        Rp 200.000 <del className="price-old">Rp 250.000</del> 
                    </div>
                    <p /> 
                    <dl>
                        <dt>Description</dt>
                        <dd><p>Coffee Beans/Ground, Light Roast,200gr</p></dd>
                    </dl>
                    <dl>
                        <dt>Roasting Type: </dt>
                        <dd>
                        <label>
                            <input type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                            <span>Light Roast</span>
                        </label>
                        </dd><dd>
                        </dd><dt>Grinding Type: </dt>
                        <dd>
                        <label>
                            <input type="radio" name="inlineRadioOptions1" id="inlineRadio2" defaultValue="option2" />
                            <span>Beans</span>
                            <input type="radio" name="inlineRadioOptions1" id="inlineRadio2" defaultValue="option2" />
                            <span>Ground</span>
                        </label>
                        </dd>
                    </dl>   
                    <dl>
                        <dt>Delivery</dt>
                        <dd>Asia, America, Australia</dd>
                    </dl>  
                    <hr />
                    <div className="row">
                        <div className="col-sm-5">
                        <dl>
                            <dt>Quantity: </dt>
                            <dd>
                            <select className="form-control form-control-sm" style={{width: 70}}>
                                <option> 1 </option>
                                <option> 2 </option>
                                <option> 3 </option>
                            </select>
                            </dd>
                        </dl>  
                        </div> 
                        <div className="col-sm-7">
                        <dl>
                            <dt>Weight: </dt>
                            <dd>
                            <label>
                                <input type="radio" name="inlineRadioOptions2" id="inlineRadio2" defaultValue="option2" />
                                <span>200 gr</span>
                            </label>
                            </dd>
                        </dl>  
                        </div> 
                    </div> 
                    <hr />
                    <a href="./Login" className="btn btncart" style={{width: '20%'}}> Buy now </a>
                    <a href="./Cart" className="btn btncart" style={{width: '20%'}}> <i className="glyphicon glyphicon-shopping-cart" /> Add to cart </a>
                    </article> 
                    <hr /><a href="./Coffees">Back to search results</a>
                </aside> 
                </div> 
            </div>
		
        <Footer/>
        </div>
        );
    }
} 

export default Deskripsicoffeesb;