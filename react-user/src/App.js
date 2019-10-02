import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Cart from './component/Cart';
import Coffees from './component/Coffees';
import Contact from './component/Contact'; 
import Equipment from './component/Equipment';
import Invoice from './component/Invoice';
import Invoice1 from './component/Invoice1';
import Invoice2 from './component/Invoice2';
import Invoice3 from './component/Invoice3';
import Login from './component/Login';
import Myprofile from './component/Myprofile';
import Myprofile1 from './component/Myprofile1';
import Myprofile2 from './component/Myprofile2';
import Myprofile3 from './component/Myprofile3';
import Products from './component/Products';
import Signup from './component/Signup';
import Teas from './component/Teas';
import Update from './component/Update';
import Artikela from './component/Artikela';
import Artikelb from './component/Artikelb';
import Artikelc from './component/Artikelc';
import Deskripsicoffeesa from './component/Deskripsicoffeesa';
import Deskripsicoffeesb from './component/Deskripsicoffeesb';
import Deskripsicoffeesc from './component/Deskripsicoffeesc';
import Deskripsiequipa from './component/Deskripsiequipa';
import Deskripsiequipb from './component/Deskripsiequipb';
import Deskripsiequipc from './component/Deskripsiequipc';
import Deskripsiteasa from './component/Deskripsiteasa';
import Deskripsiteasb from './component/Deskripsiteasb';
import Deskripsiteasc from './component/Deskripsiteasc';
import Historyinprofile from './component/Historyinprofile';
import Historyinprofile1 from './component/Historyinprofile1';
import Historyinprofile2 from './component/Historyinprofile2';
import Historyinprofile3 from './component/Historyinprofile3';


class App extends Component 
{
  render() 
  {
    return (
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/About" component={About}/>
        <Route path="/Cart" component={Cart}/>
        <Route path="/Coffees" component={Coffees}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/Equipment" component={Equipment}/>
        <Route path="/Invoice" component={Invoice}/>
        <Route path="/Invoice1" component={Invoice1}/>
        <Route path="/Invoice2" component={Invoice2}/>
        <Route path="/Invoice3" component={Invoice3}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Myprofile" component={Myprofile}/>
        <Route path="/Myprofile1" component={Myprofile1}/>
        <Route path="/Myprofile2" component={Myprofile2}/>
        <Route path="/Myprofile3" component={Myprofile3}/>
        <Route path="/Products" component={Products}/>
        <Route path="/Signup" component={Signup}/>
        <Route path="/Teas" component={Teas}/>
        <Route path="/Update" component={Update}/>
        <Route path="/Artikela" component={Artikela}/>
        <Route path="/Artikelb" component={Artikelb}/>
        <Route path="/Artikelc" component={Artikelc}/>
        <Route path="/Deskripsicoffeesa" component={Deskripsicoffeesa}/>
        <Route path="/Deskripsicoffeesb" component={Deskripsicoffeesb}/>
        <Route path="/Deskripsicoffeesc" component={Deskripsicoffeesc}/>
        <Route path="/Deskripsiequipa" component={Deskripsiequipa}/>
        <Route path="/Deskripsiequipb" component={Deskripsiequipb}/>
        <Route path="/Deskripsiequipc" component={Deskripsiequipc}/>
        <Route path="/Deskripsiteasa" component={Deskripsiteasa}/>
        <Route path="/Deskripsiteasb" component={Deskripsiteasb}/>
        <Route path="/Deskripsiteasc" component={Deskripsiteasc}/>
        <Route path="/Historyinprofile" component={Historyinprofile}/>
        <Route path="/Historyinprofile1" component={Historyinprofile1}/>
        <Route path="/Historyinprofile2" component={Historyinprofile2}/>
        <Route path="/Historyinprofile3" component={Historyinprofile3}/>
      </div>
    );
  } 
}
 
export default App; 