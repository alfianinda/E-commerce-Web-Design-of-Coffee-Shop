import React, { Component } from 'react';
import './../style/gayaku.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class Equipment extends Component 
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
                    <a href="./Deskripsiequipa">
                        <img src="images/produk equipment/produka.jpg" alt="produka" style={{maxHeight: 450}} />   
                    </a>
                    <figcaption className="info-wrap">
                        <h3>Hario Copper Buono</h3>
                        <p>Pouring Kettle 900 ml</p>
                        <div className="label-rating">80 reviews</div>
                        <div className="label-rating">91 orders </div> 
                    </figcaption>
                    <div className="bottom-wrap">
                        <a href="./Deskripsiequipa" className="btn btncart">Detail</a>	
                        <div className="h5">
                        Rp 1.450.000 
                        </div>
                    </div> 
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="thumbnail item border">
                    <a href="./Deskripsiequipb">
                        <img src="images/produk equipment/produkb.jpg" alt="produkb" style={{maxHeight: 450}} />   
                    </a>
                    <figcaption className="info-wrap">
                        <h3>Lido</h3>
                        <p>Lido 3 Hand Coffee Grinder</p>
                        <div className="label-rating">200 reviews</div>
                        <div className="label-rating">210 orders </div> 
                    </figcaption>
                    <div className="bottom-wrap">
                        <a href="./Deskripsiequipb" className="btn btncart">Detail</a>	
                        <div className="h5">
                        Rp 2.640.000
                        </div>
                    </div> 
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="thumbnail item border">
                    <a href="./Deskripsiequipc">
                        <img src="images/produk equipment/produkc.jpg" alt="produkc" style={{maxHeight: 450}} />   
                    </a>
                    <figcaption className="info-wrap">
                        <h3>Keurig Rivo</h3>
                        <p>Capuccino and Latte Home Coffe Machine</p>
                        <div className="label-rating">129 reviews</div>
                        <div className="label-rating">137 orders </div> 
                    </figcaption>
                    <div className="bottom-wrap">
                        <a href="./Deskripsiequipc" className="btn btncart">Detail</a>	
                        <div className="h5">
                        Rp 2.543.000 <del className="price-old">Rp 2.890.000</del>
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
} export default Equipment;