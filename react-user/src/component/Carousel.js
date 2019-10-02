import React, { Component } from 'react';
import './../style/gayaku.css';

class Carousel extends Component 
{
    render() 
    { 
        return (
        <div> 
            <div id="myCarousel" className="carousel slide" data-ride="carousel">

                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
            
                <div className="carousel-inner" role="listbox">
                    <div className="item active">
                    <img src={"images/slider/slidera.jpg"} alt="coffee" />
                    <div className="carousel-caption tulisan">
                        <h2><b><i>Don't underestimate the power of coffee</i></b></h2>
                    </div>      
                    </div>
             
                    <div className="item">
                    <img src={"images/slider/sliderb.jpg"} alt="coffee" />
                    <div className="carousel-caption tulisan">
                        <h2><b><i>Make coffee not war</i></b></h2>
                    </div>      
                    </div>
                
                    <div className="item">
                    <img src={"images/slider/sliderc.jpg"} alt="coffee" />
                    <div className="carousel-caption tulisan">
                        <h2><b><i>Life begins after coffee</i></b></h2>
                    </div>      
                    </div>
                </div>

                <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
        );
    }
} export default Carousel;