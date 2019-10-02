import React, { Component } from 'react';
import './../style/gayaku.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class Teas extends Component 
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
                    <a href="./Deskripsiteasa">
                        <img src="images/produk teh/produka.jpg" alt="produka" style={{maxHeight: 450}} />   
                    </a>
                    <figcaption className="info-wrap">
                        <h3>Healthy Japanese Tea</h3>
                        <p>Organic Japanese Sencha Green Tea Loose Leaf</p>
                        <div className="label-rating">145 reviews</div>
                        <div className="label-rating">154 orders </div> 
                    </figcaption>
                    <div className="bottom-wrap">
                        <a href="./Deskripsiteasa" className="btn btncart">Detail</a>	
                        <div className="h5">
                        Rp 150.000 
                        </div>
                    </div> 
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="thumbnail item border">
                    <a href="./Deskripsiteasb">
                        <img src="images/produk teh/produkb.jpg" alt="produkb" style={{maxHeight: 450}} />   
                    </a>
                    <figcaption className="info-wrap">
                        <h3>Healthy Tea</h3>
                        <p>Cute Packaging Healthy Tea</p>
                        <div className="label-rating">142 reviews</div>
                        <div className="label-rating">174 orders </div> 
                    </figcaption>
                    <div className="bottom-wrap">
                        <a href="./Deskripsiteasb" className="btn btncart">Detail</a>	
                        <div className="h5">
                        Rp 70.000 
                        </div>
                    </div> 
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="thumbnail item border">
                    <a href="./Deskripsiteasc">
                        <img src="images/produk teh/produkc.jpg" alt="produkc" style={{maxHeight: 450}} />   
                    </a>
                    <figcaption className="info-wrap">
                        <h3>The Tea Project</h3>
                        <p>Organic Tea</p>
                        <div className="label-rating">143 reviews</div>
                        <div className="label-rating">144 orders </div> 
                    </figcaption>
                    <div className="bottom-wrap">
                        <a href="./Deskripsiteasc" className="btn btncart">Detail</a>	
                        <div className="h5">
                        Rp 100.000 <del className="price-old">Rp 150.000</del>
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
} export default Teas;