import React, { Component } from 'react';
import './../style/gayaku.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


class Deskripsiequipc extends Component 
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
                        <div><img src="images/produk equipment/produkc.jpg" alt="produkc"/></div>
                    </div> 
                    {/* slider-product.// */}
                    <div className="img-small-wrap">
                        <div className="item-gallery"> <img src="images/produk equipment/produkc.jpg" alt="produkc"/> </div>
                        <div className="item-gallery"> <img src="images/produk equipment/produkc.jpg" alt="produkc"/> </div>
                        <div className="item-gallery"> <img src="images/produk equipment/produkc.jpg" alt="produkc"/> </div>
                        <div className="item-gallery"> <img src="images/produk equipment/produkc.jpg" alt="produkc"/> </div>
                    </div> 
                    </article> 
                </aside>
                <aside className="col-sm-7">
                    <article>
                    <h3>Lido Capuccino and Latte Home Coffe Machine</h3>
                    <p> 
                    </p><div className="h4">
                        Rp 2.543.000 <del className="price-old">Rp 2.890.000</del>
                    </div>
                    <p /> 
                    <dl>
                        <dt>Description</dt>
                        <dd><p>Keurig’s coffee machine has three frothing modes: the cold froth, latte, and cappuccino. It has a convenient design that lets you brew espresso on one side and froth milk as well on the other. The machine further has two espresso size options; the Short and Lungo.
                            The Keurig Rivo is engineered with 15 bars of pressure, and it can brew coffee under one minute. It is simple, easy to use with the automatic on/off switch and energy-saving mode. You’ll love its simple yet sassy design, and the price tag will surely catch your eyes.</p></dd>
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
                    </div> 
                    <hr />
                    <a href="./Login" className="btn btncart" style={{width: '20%'}}> Buy now </a>
                    <a href="./Cart" className="btn btncart" style={{width: '20%'}}> <i className="glyphicon glyphicon-shopping-cart" /> Add to cart </a>
                    </article> 
                    <hr /><a href="./Equipment">Back to search results</a>
                </aside> 
                </div> 
            </div>
		
        <Footer/>
        </div>
        );
    }
} 

export default Deskripsiequipc;