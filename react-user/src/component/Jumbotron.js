import React, { Component } from 'react';
import './../style/gayaku.css';

class Jumbotron extends Component 
{
    render() 
    { 
        return (
        <div> 
            {/* bikin tulisan jumbotron */}
            <div className="jumbotron text-center">
                <h1>FanMartin <sub style={{fontSize: 20}}><i>Indonesian Coffee</i></sub></h1>
                <h2><i>Great taste from the east</i></h2> 
            </div>
        </div>
        );
    }
} export default Jumbotron;