import React, { Component } from 'react';
import './../style/gayaku.css';

class Kategori extends Component  
{
    render() 
    { 
        return (
        <div> 

          {/* bikin grid gambar kategori produk */}
          <div className="container-fluid text-center">
            <hr className="border" />
            <a href="./Products" style={{textDecoration: 'none', color: 'rgb(110, 7, 12)'}}><h1><b>OUR PRODUCTS</b></h1></a>
            <div className="row text-center">
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
          
        </div>
        );
    }
} export default Kategori;