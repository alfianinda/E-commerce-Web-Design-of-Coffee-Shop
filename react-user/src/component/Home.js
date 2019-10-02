import React, { Component } from 'react';
import './../style/gayaku.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Carousel from './Carousel';
import Kategori from './Kategori';
import Jumbotron from './Jumbotron';
import Footer from './Footer';


class Home extends Component 
{
    render() 
    { 
        return (
        <div> 
      <Header/>
      <Carousel/>
      <Kategori/>
      
          {/* bikin news and updates */}
          <div className="container-fluid text-center">
            <hr className="border" />
            <h1><b>NEWS &amp; UPDATES</b></h1>
            <div className="row text-center">
              <div className="col-sm-4">
                <div className="thumbnail item border" style={{textAlign: 'justify', padding: 15, color: 'black'}}>
                  <img src="images/artikel/artikelb.jpg" alt="COFFEES" />
                  <h3><b>Apa menariknya sih kopi?</b></h3>
                  <p>Best things in a cup of coffee
                    <br /><br />Menikmati udara pagi sembari menyesap aroma kopi barangkali menjadi hal yang rasanya seakan membawa kita ke surga dunia. Hal ini yang saya rasakan..dan mungkin tidak sedikit dari anda yang juga merasakan hal yang sama, bahkan jika anda hanya mencium aromanya saja tanpa meminumnya. 
                  </p>
                  <a href="./Artikelb" className="nav-toggle" style={{color: 'black'}}><b>Read More</b></a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="thumbnail item border" style={{textAlign: 'justify', padding: 15, color: 'black'}}>
                  <img src="images/artikel/artikela.jpg" alt="COFFEES" />
                  <h3><b>Manfaat minum kopi bagi kesehatan berdasarkan sains</b></h3>
                  <p>Minum kopi sebenarnya sehat lho. Mau tahu kenapa?
                    <br />Mari kita simak bersama penjelasannya..
                    <br /><br />1. Kopi bisa meningkatkan level energi dan membuat kamu lebih cerdas
                    <br /><br />Barangkali ini yang sebenarnya mayoritas dirasakan oleh penggemar kopi. Pengalaman penulis sendiri, kopi jadi energy booster di kantor dan memunculkan ide-ide baru. Menarik kaan??</p>
                  <a href="./Artikela" className="nav-toggle" style={{color: 'black'}}><b>Read More</b></a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="thumbnail item border" style={{textAlign: 'justify', padding: 15, color: 'black'}}>
                  <img src="images/artikel/artikelc.jpg" alt="COFFEES" />
                  <h3 style={{textAlign: 'left'}}><b>What's special about Indonesian Coffee</b></h3>
                  <p>
                    Nyatanya, dari sekian banyak negara di dunia, Indonesia termasuk dalam 10 negara pengekspor kopi terbesar di dunia secara value.
                    Di bawah ini adalah daftarnya (berdasarkan data Word's Top Exports 2017)
                    <br /><br />
                    1. Brazil: US$4.6 billion (14.1% of total coffee exports)
                    <br />2. Vietnam: $3.5 billion (10.7%) 
                    <br />3. Germany: $2.64 billion (8.1%) 
                    <br />4. Colombia: $2.58 billion (7.9%)
                  </p>
                  <a href="./Artikelc" className="nav-toggle" style={{color: 'black'}}><b>Read More</b></a>
                </div>
              </div>
            </div>
          </div>
		  
		  <Jumbotron/>
      <Footer/>
        </div>
        );
    }
} export default Home;