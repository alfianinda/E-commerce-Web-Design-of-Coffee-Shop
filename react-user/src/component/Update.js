import React, { Component } from 'react';
import './../style/gayaku.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Jumbotron from './Jumbotron';
import Footer from './Footer';


class Update extends Component 
{
    render() 
    { 
        return (
        <div> 
		<Header/>

            {/* Container (About Section) */}
            <div style={{marginTop: 150}}><center><h1><b>NEWS &amp; UPDATES</b></h1></center></div>
            <div className="container bg-grey" style={{marginTop: 50, borderRadius: 15, padding: 20}}>
            <div className="row">
                <div className="col-sm-8" style={{textAlign: 'justify'}}>
                <h2>Apa menariknya sih kopi?</h2><br />
                <p>Best things in a cup of coffee
                    <br /><br />Menikmati udara pagi sembari menyesap aroma kopi barangkali menjadi hal yang rasanya seakan membawa kita ke surga dunia. Hal ini yang saya rasakan..dan mungkin tidak sedikit dari anda yang juga merasakan hal yang sama, bahkan jika anda hanya mencium aromanya saja tanpa meminumnya. 
                </p>
                <br /><a href="./Artikelb"><button className="btn btncart" style={{width: '20%'}}>Read More...</button></a>
                </div>
                <div className="col-sm-4">
                <div className="thumbnail item">
                    <a href="./Artikelb">
                    <img src="images/artikel/artikelb.jpg" alt="COFFEES" />  
                    </a>    
                </div>
                </div>
            </div>
            </div>
            <div className="container bg-grey" style={{marginTop: 50, borderRadius: 15, padding: 20}}>
            <div className="row">
                <div className="col-sm-4">
                <div className="thumbnail item">
                    <a href="./Artikela">
                    <img src="images/artikel/artikela.jpg" alt="COFFEES" />     
                    </a>
                </div>
                </div>
                <div className="col-sm-8" style={{textAlign: 'justify'}}>
                <h2>Manfaat minum kopi bagi kesehatan berdasarkan sains</h2><br />
                <p>Minum kopi sebenarnya sehat lho. Mau tahu kenapa?
                    <br />Mari kita simak bersama penjelasannya..
                    <br /><br />1. Kopi bisa meningkatkan level energi dan membuat kamu lebih cerdas
                    <br /><br />Barangkali ini yang sebenarnya mayoritas dirasakan oleh penggemar kopi. Pengalaman penulis sendiri, kopi jadi energy booster di kantor dan memunculkan ide-ide baru. Menarik kaan??</p>
                <br /><a href="./Artikela"><button className="btn btncart" style={{width: '20%'}}>Read More...</button></a>
                </div>
            </div>
            </div>
            <div className="container bg-grey" style={{marginTop: 50, borderRadius: 15, padding: 20}}>
            <div className="row">
                <div className="col-sm-8" style={{textAlign: 'justify'}}>
                <h2>What's special about Indonesian Coffee</h2><br />
                <p>
                    Nyatanya, dari sekian banyak negara di dunia, Indonesia termasuk dalam 10 negara pengekspor kopi terbesar di dunia secara value.
                    Di bawah ini adalah daftarnya (berdasarkan data Word's Top Exports 2017)
                    <br /><br />
                    1. Brazil: US$4.6 billion (14.1% of total coffee exports)
                    <br />2. Vietnam: $3.5 billion (10.7%) 
                    <br />3. Germany: $2.64 billion (8.1%) 
                    <br />4. Colombia: $2.58 billion (7.9%)
                </p>
                <br /><a href="./Artikelc"><button className="btn btncart" style={{width: '20%'}}>Read More...</button></a>
                </div>
                <div className="col-sm-4">
                <div className="thumbnail item">
                    <a href="./Artikelc">
                    <img src="images/artikel/artikelc.jpg" alt="COFFEES" />  
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
} export default Update;