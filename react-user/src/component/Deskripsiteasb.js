import React, { Component } from 'react';
import './../style/gayaku.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class Deskripsiteasb extends Component 
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
                        <div><img src="images/produk teh/produkb.jpg" alt="produkb" /></div>
                    </div> 
                    {/* slider-product.// */}
                    <div className="img-small-wrap">
                        <div className="item-gallery"> <img src="images/produk teh/produkb.jpg" alt="produkb" /> </div>
                        <div className="item-gallery"> <img src="images/produk teh/produkb.jpg" alt="produkb" /> </div>
                        <div className="item-gallery"> <img src="images/produk teh/produkb.jpg" alt="produkb" /> </div>
                        <div className="item-gallery"> <img src="images/produk teh/produkb.jpg" alt="produkb" /> </div>
                    </div> 
                    </article> 
                </aside>
                <aside className="col-sm-7">
                    <article>
                    <h3>Healthy Tea</h3>
                    <p> 
                    </p><div className="h4">
                        Rp 70.000 
                    </div>
                    <p /> 
                    <dl>
                        <dt>Description</dt>
                        <dd><p>Cute Packaging Healthy Tea</p></dd>
                    </dl>   
                    <dl>
                        <dt>Product Name: </dt>
                        <dd>
                        <select className="form-control form-control-sm" style={{width: 200}}>
                            <option> Strawberry Mojito </option>
                            <option> Banana Flambe </option>
                            <option> Delicate Mango </option>
                        </select>
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
                    </div> 
                    <hr />
                    <a href="./Login" className="btn btncart" style={{width: '20%'}}> Buy now </a>
                    <a href="./Cart" className="btn btncart" style={{width: '20%'}}> <i className="glyphicon glyphicon-shopping-cart" /> Add to cart </a>
                    </article> 
                    <hr /><a href="./Teas">Back to search results</a>
                </aside> 
                </div> 
            </div>
			<Footer/>
        </div>
        );
    }
} 

export default Deskripsiteasb;