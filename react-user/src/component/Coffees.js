import React, { Component } from 'react';
import './../style/gayaku.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class Coffees extends Component  
{
    render() 
    { 
        return (
        <div> 
		<Header/>
 
            {/* bikin gambar dan deskripsi */}
            <div className="container-fluid text-center">
                <div className="row text-center">
                <div className="col-sm-4">
                    <div className="thumbnail item border">
                    <a href="./Deskripsicoffeesa">
                        <img src="images/produk kopi/produka.jpg" alt="produka" style={{maxHeight: 450}} />   
                    </a>
                    <figcaption className="info-wrap">
                        <h3>Velo 100% Arabica Coffee Bean</h3>
                        <p>Medium Roast, 100gr</p>
                        <div className="label-rating">132 reviews</div>
                        <div className="label-rating">154 orders </div> 
                    </figcaption>
                    <div className="bottom-wrap">
                        <a href="./Deskripsicoffeesa" className="btn btncart">Detail</a>	
                        <div className="h5">
                        Rp 150.000 <del className="price-old">Rp 200.000</del>
                        </div>
                    </div> 
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="thumbnail item border">
                    <a href="./Deskripsicoffeesb">
                        <img src="images/produk kopi/produkb.jpg" alt="produkb" style={{maxHeight: 450}} />   
                    </a>
                    <figcaption className="info-wrap">
                        <h3>Caffe Espresso</h3>
                        <p>Coffee Beans/Ground, Light Roast,200gr</p>
                        <div className="label-rating">142 reviews</div>
                        <div className="label-rating">174 orders </div> 
                    </figcaption>
                    <div className="bottom-wrap">
                        <a href="./Deskripsicoffeesb" className="btn btncart">Detail</a>	
                        <div className="h5">
                        Rp 200.000 <del className="price-old">Rp 250.000</del>
                        </div>
                    </div> 
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="thumbnail item border">
                    <a href="./Deskripsicoffeesc">
                        <img src="images/produk kopi/produkc.jpg" alt="produkc" style={{maxHeight: 450}} />   
                    </a>
                    <figcaption className="info-wrap">
                        <h3>Rose Pank</h3>
                        <p>Coffee Beans/Ground, Medium Roast, 100gr</p>
                        <div className="label-rating">132 reviews</div>
                        <div className="label-rating">154 orders </div> 
                    </figcaption>
                    <div className="bottom-wrap">
                        <a href="./Deskripsicoffeesc" className="btn btncart">Detail</a>	
                        <div className="h5">
                        Rp 150.000 <del className="price-old">Rp 200.000</del>
                        </div>
                    </div> 
                    </div>
                </div>
                </div>
            </div>
		
        <Footer/>
        </div>
        );
    }
} export default Coffees;