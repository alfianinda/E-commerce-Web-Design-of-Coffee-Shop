import React, { Component } from 'react';
import './../style/gayaku.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class Deskripsiequipa extends Component 
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
                        <div><img src="images/produk equipment/produka.jpg" alt="produka"/></div>
                    </div> 
                    {/* slider-product.// */}
                    <div className="img-small-wrap">
                        <div className="item-gallery"> <img src="images/produk equipment/produka.jpg" alt="produka"/> </div>
                        <div className="item-gallery"> <img src="images/produk equipment/produka.jpg" alt="produka"/> </div>
                        <div className="item-gallery"> <img src="images/produk equipment/produka.jpg" alt="produka"/> </div>
                        <div className="item-gallery"> <img src="images/produk equipment/produka.jpg" alt="produka"/> </div>
                    </div> 
                    </article> 
                </aside>
                <aside className="col-sm-7">
                    <article>
                    <h3>Hario Copper Buono</h3>
                    <p> 
                    </p><div className="h4">
                        Rp 1.450.000
                    </div>
                    <p /> 
                    <dl>
                        <dt>Description</dt>
                        <dd><p>Hi there! Better you brew with the Hario Copper Buono Pouring Kettle 900 ml. We think you will love it :)</p></dd>
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

export default Deskripsiequipa;