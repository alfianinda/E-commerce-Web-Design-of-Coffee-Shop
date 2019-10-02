import React, { Component } from 'react';
import './../style/gayaku.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Jumbotron from './Jumbotron';
import Footer from './Footer';

class About extends Component 
{
    render() 
    { 
        return (
        <div> 
		<Header/>

            {/* Container (About Section) */}
            <div style={{marginTop: 150 }}>
                <center><h1><b>ABOUT US</b></h1></center>
            </div>

            <div className="container bg-grey apaaja" style={{marginTop: 50, borderRadius: 15, padding: 20}}>
            <div className="row">
                <div className="col-sm-4 text-center">
                <img src="images/me.jpg" className="img-circle border" width={220} height={204} alt="COFFEES" />     
                </div>
                <div className="col-sm-8" style={{marginTop: 40, fontSize: 16, textAlign: 'justify'}}>
                <p>
                    FanMartin's Coffe didirikan oleh Nur Inna Alfianinda pada tahun 2018, 
                    merupakan sebuah perusahaan yang memproduksi biji dan bubuk kopi arabika kualitas terbaik 
                    dengan variasi tipe roasting dan grinding, serta cita rasa dan aromanya, dimana kopi yang diproduksi berasal 
                    dari wilayah perkebunan kopi kayumas Jawa Timur-Indonesia yang citarasa kopinya telah dikenal dan mendunia.
                </p>
                </div>
            </div>
            </div>
        
        <div style={{marginTop: 70}}>
		<Jumbotron/>
        </div>

        <Footer/>
        </div>
        );
    }
} export default About;