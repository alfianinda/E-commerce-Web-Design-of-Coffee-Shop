import React, { Component } from 'react';
import './../style/gayaku.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Jumbotron from './Jumbotron';
import Footer from './Footer';

class Artikelc extends Component 
{
    render() 
    { 
        return (
        <div> 
		<Header/>

            {/* Container (About Section) */}
            <div className="container" style={{marginTop: 150}}><center><h1><b>What's special about Indonesian Coffee</b></h1></center></div>
            <div className="container" style={{marginTop: 30}}>
            <div className="row">
                <div className="col-sm-4">
                <div className="thumbnail item">
                    <a href="./Artikelc">
                    <img src="images/artikel/artikelc.jpg" alt="COFFEES" />     
                    </a>
                </div>
                </div>
                <div className="col-sm-8" style={{textAlign: 'justify'}}>
                <p>
                    Nyatanya, dari sekian banyak negara di dunia, Indonesia termasuk dalam 10 negara pengekspor kopi terbesar di dunia secara value.
                    Di bawah ini adalah daftarnya (berdasarkan data Word's Top Exports 2017)
                    <br /><br />
                    1. Brazil: US$4.6 billion (14.1% of total coffee exports)
                    <br />2. Vietnam: $3.5 billion (10.7%) 
                    <br />3. Germany: $2.64 billion (8.1%) 
                    <br />4. Colombia: $2.58 billion (7.9%)   
                    <br />5. Switzerland: $2.2 billion (6.9%) 
                    <br />6. Italy: $1.6 billion (5%) 
                    <br />7. Indonesia: $1.19 billion (3.6%) 
                    <br />8. Honduras: $1.16 billion (3.6%) 
                    <br />9. France: $1.07 billion (3.3%) 
                    <br />10. Belgium: $940.3 million (2.9%) 
                    <br />11. Ethiopia: $938 million (2.9%) 
                    <br />12. United States: $873.1 million (2.7%) 
                    <br />13. Netherlands: $754.1 million (2.3%) 
                    <br />14. Guatemala: $748.6 million (2.3%) 
                    <br />15. Peru: $707.2 million (2.2%) 
                    <br />Jadi, sebagai rakyat Indonesia, sudah seharusnya kita bangga dengan kopi di negeri sendiri. 
                    <br /><br />Untuk lebih mengenal kopi asal negeri sendiri, ini dia 10 kopi Indonesia yang terkenal di dunia :
                    <br /><br />1. Kopi Jawa
                    <br />Biasa disebut Java Coffee. Sesuai dengan nama pulaunya, kopi ini dihasilkan dari tanah Jawa.  
                    Dari segi cita rasa dan aroma, meskipun kopi Jawa tidak sekuat kopi Sumatera dan Sulawesi, dia tetap memiliki penikmat tersendiri di kalangan penikmat kopi karena aroma rempah yang dihasilkan.
                    <br /><br />2. Kopi Toraja
                    <br />Kopi ini berasal dari tanah Toraja, Sulawesi Tenggara. Terkenal dengan rasa yang kuat dan kadar asam yang tinggi. Meskipun rasa asam cukup kuat, kopi ini memiliki aroma earthy yang khas dan inilah yang menjadikan kopi Toraja unik diantara kopi-kopi nusantara.
                    <br /><br />3. Kopi Sumatra
                    <br />Meskipun banyak sekali jenis kopi dari Pulau Sumatra, orang di luar sana, lebih familiar dengan istilah Sumatra Coffee. Kopi ini juga terkenal di dunia, baik dari rasa maupun kualitasnya. Kopi Sumatra ini dikenal dengan keasamannya yang rendah dan heavy.
                    Jenis-jenis kopi Sumatera yang terkenal antara lain, kopi Aceh Gayo, kopi Mandaheling, dan kopi Lampung.
                    <br /><br />4. Kopi Kintamani
                    <br />Kopi yang dihasilkan dari dataran tinggi Kintamani, Bali ini memiliki cita rasa yang lembut dengan rasa dan aroma citrus. 
                    <br /><br />5. Kopi Wamena
                    <br />Papua juga memiliki kopi terkenal di dunia, dihasilkan di pegunungan di daerah Wamena, Papua.
                    Soal rasa, banyak yang bilang Kopi Wamena ini memiliki rating yang lebih baik dari keseluruhan kopi di Indonesia. Dengan kadar asam rendah dan tidak banyak mengandung ampas, kopi ini memiliki kualitas terbaik yang diinginkan banyak penikmat kopi. Tentunya kualitas ini sepadan dengan harganya yang cukup tinggi.     
                </p>
                <br /><a href="./Update"><button className="btn btncart" style={{width: '40%'}}>Baca artikel lainnya yuk..</button></a>
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
} export default Artikelc;