import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../style/gayaku.css';
import Header from './Header';
import Footer from './Footer';

class Postproducts extends Component 
{
    render() 
    { 
        return ( 
        <div>
		<Header/>

            <section id="main">
            <div className="container">
            <div className="row">
                <div className="col-md-3">
                <div className="list-group">
                    {/* <a href="index.html" class="list-group-item active main-color-bg"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
            Dashboard <span class="badge">12</span>
            </a> */}
                    <a href="./" className="list-group-item"><span className="glyphicon glyphicon-eye-open" aria-hidden="true" /> Overview </a>
                    <a href="./History" className="list-group-item"><span className="glyphicon glyphicon-list-alt" aria-hidden="true" /> History Invoices{/*<span class="badge">25</span>*/}</a>
                    <a href="./Postproducts" className="list-group-item"><span className="glyphicon glyphicon-pencil" aria-hidden="true" /> Products</a>
                    <a href="./Customers" className="list-group-item"><span className="glyphicon glyphicon-user" aria-hidden="true" /> Customers</a>
                </div>
                </div>
                <div className="col-md-9">
                {/* <div class="panel panel-default">
                <div class="panel-heading" style="background-color:rgb(110, 7, 12);color:white;">
                <h3 class="panel-title">Add Products</h3>
                </div>
                <div class="panel-body">
                <div class="col-md-3">
                    
                </div>
                
                <div class="col-md-3">
                    <dl>
                        <dt>Product Categories: </dt>
                        <dd>
                            <select class="form-control form-control-sm" style="width:150px;">
                                <option> Coffees </option>
                                <option> Teas </option>
                                <option> Equipment </option>
                            </select>
                        </dd>
                    </dl>
                </div>
        
                <div class="col-md-3">
                    <div class="well dash-box btn btncart">
                    <center><h4><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                    Add Products</h4></center>
                    </div>
                </div>

                <div class="col-md-3">
                    
                </div>

                </div>
            </div>   */}
                {/*Products*/}
                <div className="panel panel-default">
                    <div className="panel-heading" style={{backgroundColor: 'rgb(110, 7, 12)', color: 'white'}}>
                    <h3 className="panel-title">Add Categories</h3>
                    </div>
                    <div className="container" style={{padding: 20}}>
                    <form>
                        <div className="col-sm-2" />
                        <div className="col-sm-5">
                        <div className="form-group">
                            <label htmlFor="email">Name of Category:</label>
                            <input type="text" placeholder="Name of Category" className="form-control" name="category" required />
                        </div>
                        <button type="submit" className="btn btncart">Post</button>
                        </div>   
                    </form>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading" style={{backgroundColor: 'rgb(110, 7, 12)', color: 'white'}}>
                    <h3 className="panel-title">Displayed Categories and Add Products</h3>
                    </div>
                    <div className="panel-body">
                    <table className="table table-striped table-hover">
                        <tbody><tr>
                            <th className="text-center">Category</th>
                            <th className="text-center">Add Products</th>
                            <th className="text-center">Action</th>
                        </tr>
                        <tr>
                            <td className="text-center">Coffees</td>
                            <td>
                            <center>
                                <button className="btn btn-info border" style={{width: '60%'}}><span className="glyphicon glyphicon-plus" /></button>
                            </center>
                            </td>
                            <td>
                            <center>
                                <button className="btn border" style={{backgroundColor: 'greenyellow'}}>Edit</button>
                                <button className="btn border" style={{backgroundColor: 'red', color: 'white'}}>Delete</button>
                            </center>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">Teas</td>
                            <td>
                            <center>
                                <button className="btn btn-info border" style={{width: '60%'}}><span className="glyphicon glyphicon-plus" /></button>
                            </center>
                            </td>
                            <td>
                            <center>
                                <button className="btn border" style={{backgroundColor: 'greenyellow'}}>Edit</button>
                                <button className="btn border" style={{backgroundColor: 'red', color: 'white'}}>Delete</button>
                            </center>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">Equipment</td>
                            <td>
                            <center>
                                <button className="btn btn-info border" style={{width: '60%'}}><span className="glyphicon glyphicon-plus" /></button>
                            </center>
                            </td>
                            <td>
                            <center>
                                <button className="btn border" style={{backgroundColor: 'greenyellow'}}>Edit</button>
                                <button className="btn border" style={{backgroundColor: 'red', color: 'white'}}>Delete</button>
                            </center>
                            </td>
                        </tr>
                        </tbody></table>
                    </div>
                </div>
                {/* ======================================== */}
                <div className="panel panel-default">
                    <div className="panel-heading" style={{backgroundColor: 'rgb(110, 7, 12)', color: 'white'}}>
                    <h3 className="panel-title">Displayed Products</h3>
                    </div>
                    <div className="panel-body">
                    <table className="table table-striped table-hover">
                        <tbody><tr>
                            <th className="text-center">Category</th>
                            <th className="text-center">Name</th>
                            <th className="text-center">Action</th>
                        </tr>
                        <tr>
                            <td className="text-center">Coffees</td>
                            <td className="text-center">Velo 100% Arabica Coffee Bean</td>
                            <td>
                            <center>
                                <button className="btn border" style={{backgroundColor: 'greenyellow'}}>Edit</button>
                                <button className="btn border" style={{backgroundColor: 'red', color: 'white'}}>Delete</button>
                            </center>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">Coffees</td>
                            <td className="text-center">Caffe Espresso</td>
                            <td>
                            <center>
                                <button className="btn border" style={{backgroundColor: 'greenyellow'}}>Edit</button>
                                <button className="btn border" style={{backgroundColor: 'red', color: 'white'}}>Delete</button>
                            </center>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">Coffees</td>
                            <td className="text-center">Rose Pank</td>
                            <td>
                            <center>
                                <button className="btn border" style={{backgroundColor: 'greenyellow'}}>Edit</button>
                                <button className="btn border" style={{backgroundColor: 'red', color: 'white'}}>Delete</button>
                            </center>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">Teas</td>
                            <td className="text-center">Healthy Japanese Tea</td>
                            <td>
                            <center>
                                <button className="btn border" style={{backgroundColor: 'greenyellow'}}>Edit</button>
                                <button className="btn border" style={{backgroundColor: 'red', color: 'white'}}>Delete</button>
                            </center>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">Teas</td>
                            <td className="text-center">Healthy Tea</td>
                            <td>
                            <center>
                                <button className="btn border" style={{backgroundColor: 'greenyellow'}}>Edit</button>
                                <button className="btn border" style={{backgroundColor: 'red', color: 'white'}}>Delete</button>
                            </center>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">Teas</td>
                            <td className="text-center">The Tea Project</td>
                            <td>
                            <center>
                                <button className="btn border" style={{backgroundColor: 'greenyellow'}}>Edit</button>
                                <button className="btn border" style={{backgroundColor: 'red', color: 'white'}}>Delete</button>
                            </center>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">Equipment</td>
                            <td className="text-center">Hario Copper Buono</td>
                            <td>
                            <center>
                                <button className="btn border" style={{backgroundColor: 'greenyellow'}}>Edit</button>
                                <button className="btn border" style={{backgroundColor: 'red', color: 'white'}}>Delete</button>
                            </center>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">Equipment</td>
                            <td className="text-center">Lido</td>
                            <td>
                            <center>
                                <button className="btn border" style={{backgroundColor: 'greenyellow'}}>Edit</button>
                                <button className="btn border" style={{backgroundColor: 'red', color: 'white'}}>Delete</button>
                            </center>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">Equipment</td>
                            <td className="text-center">Keurig Rivo</td>
                            <td>
                            <center>
                                <button className="btn border" style={{backgroundColor: 'greenyellow'}}>Edit</button>
                                <button className="btn border" style={{backgroundColor: 'red', color: 'white'}}>Delete</button>
                            </center>
                            </td>
                        </tr>
                        </tbody></table>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </section>

		<Footer/>
        </div>
        );
    }
} 

export default Postproducts;