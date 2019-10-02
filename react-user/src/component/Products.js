import React, { Component } from 'react';
import './../style/gayaku.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Jumbotron from './Jumbotron';
import Footer from './Footer';

class Products extends Component 
{
    render() 
    { 
        return (
        <div> 
		<Header/>

            {/* Container (About Section) */}
            <div style={{marginTop: 150}}><center><h1><b>OUR PRODUCTS</b></h1>
                <h3>What we offer</h3></center></div>
            <div className="container bg-grey" style={{marginTop: 50, borderRadius: 15, padding: 20}}>
            <div className="row">
                <div className="col-sm-8">
                <h2>KOPI</h2><br />
                <p>
                    FanMartin's Coffee menyediakan biji dan bubuk kopi arabika yang telah dipanggang sesuai standar sehingga menghasilkan kualitas kopi terbaik. 
                    Buah dan biji kopi kami berasal dari perkebunan kopi kayumas di Jawa Timur-Indonesia yang citarasanya sudah mendunia.
                </p>
                <br /><a href="./Coffees"><button className="btn btncart" style={{width: '40%'}}>Lihat produk kami dan mulai belanja</button></a>
                </div>
                <div className="col-sm-4">
                <div className="thumbnail item">
                    <a href="./Coffees">
                    <img src="images/produk kopi/produka.jpg" alt="COFFEES" />
                    <div className="carousel-caption tulisangrid">
                        <h1><b>COFFEES</b></h1>
                    </div>  
                    </a>    
                </div>
                </div>
            </div>
            </div>
            <div className="container bg-grey" style={{marginTop: 50, borderRadius: 15, padding: 20}}>
            <div className="row">
                <div className="col-sm-4">
                <div className="thumbnail item">
                    <a href="./Teas">
                    <img src="images/produk teh/produkb.jpg" alt="TEAS" />
                    <div className="carousel-caption tulisangrid">
                        <h1><b>TEAS</b></h1>
                    </div>      
                    </a>
                </div>
                </div>
                <div className="col-sm-8">
                <h2>TEH</h2><br />
                <p>
                    Kami juga menyediakan produk teh yang memiliki manfaat bagi kesehatan dengan rasa herbal, buah, bunga, dan lain sebaginya.
                    Selain itu terdapat packaging atau tea bag yang unik dan menarik.
                </p>
                <br /><a href="./Teas"><button className="btn btncart" style={{width: '40%'}}>Lihat produk kami dan mulai belanja</button></a>
                </div>
            </div>
            </div>
            <div className="container bg-grey" style={{marginTop: 50, borderRadius: 15, padding: 20}}>
            <div className="row">
                <div className="col-sm-8">
                <h2>EQUIPMENT</h2><br />
                <p>
                    Kami menyediakan peralatan kopi tradisional, super <i>automatic, premium espresso grinders</i>, dan banyak lagi lainnya.
                </p>
                <br /><a href="./Equipment"><button className="btn btncart" style={{width: '40%'}}>Lihat produk kami dan mulai belanja</button></a>
                </div>
                <div className="col-sm-4">
                <div className="thumbnail item">
                    <a href="./Equipment">
                    <img src="images/produk equipment/produka.jpg" alt="EQUIPMENT" />
                    <div className="carousel-caption tulisangrid">
                        <h1><b>EQUIPMENT</b></h1>
                    </div>  
                    </a>    
                </div>
                </div>
            </div>
            </div>
		
        <div style={{marginTop:20}}>
        <Jumbotron/>
        </div>

        <Footer/>	
        </div>
        );
    }
} export default Products;