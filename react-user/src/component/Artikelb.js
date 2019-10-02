import React, { Component } from 'react';
import './../style/gayaku.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Jumbotron from './Jumbotron';
import Footer from './Footer';


class Artikelb extends Component 
{
    render() 
    { 
        return (
        <div>
        <Header/>		

            {/* Container (About Section) */}
            <div className="container" style={{marginTop: 150}}><center><h1><b>Apa menariknya sih kopi?</b></h1></center></div>
            <div className="container" style={{marginTop: 30}}>
            <div className="row">
                <div className="col-sm-4">
                <div className="thumbnail item">
                    <a href="./Artikelb">
                    <img src="images/artikel/artikelb.jpg" alt="COFFEES" />     
                    </a>
                </div>
                </div>
                <div className="col-sm-8" style={{textAlign: 'justify'}}>
                <p>Best things in a cup of coffee
                    <br /><br />Menikmati udara pagi sembari menyesap aroma kopi barangkali menjadi hal yang rasanya seakan membawa kita ke surga dunia. Hal ini yang saya rasakan..dan mungkin tidak sedikit dari anda yang juga merasakan hal yang sama, bahkan jika anda hanya mencium aromanya saja tanpa meminumnya. 
                    So, sembari anda menikmati kopi, mari mencari tahu apa yang menarik dari kopi – dan anda mungkin akan sedikit terkejut untuk menemukan apa yang sebenarnya ada dalam secangkir kopi
                    <br /><br />1. It smells like heaven
                    <br />Hampir semua orang cinta aroma kopi yang diseduh. Tanpa keberadaan aromanya, kopi mungkin hanyalah minuman yang terasa pahit dan asam, karena adanya komponen asam organik di dalamnya. 
                    Sebelum tegukan pertama, cobalah setidaknya menyesap aromanya terlebih dahulu. 
                    Sensasi yang kaya rasa dari kopi ini nyatanya berasal dari sekitar 900 senyawa volatile (mudah menguap) yang dihasilkan dari biji kopi yang dipanggang (1). Senyawa ini terbentuk dari proses pemanggangan yang sama halnya dengan proses memasak. Sesungguhnya mekanisme pembentukan aroma kopi ini sangatlah kompleks dengan banyak interaksi kimia di dalamnya, diantaranya reaksi Maillard, degradasi Strecker, pemecahan asam amino, dan sebagainya yang tentunya masih banyak lagi (1).
                    <br /><br />2. Rasa kopi yang khas dan nikmat
                    <br />Barangkali tidak semua orang suka dengan rasa kopi, tapi siapa yang suka kopi, biasanya sukaaa banget, seperti halnya si penulis.
                    Karena kopi memiliki sedikit rasa pahit dan sedikit asam, dan justru inilah menariknya kopi. Ditambah sedikit gula atau krim juga enak, and nothing wrong with that. Rasa kopi masih terasa tajam dan menonjol.
                    <br /><br />Tentunya setiap jenis kopi juga memiliki kekhasan tersendiri, misalnya saja kopi Indonesia umumnya memiliki rasa khas nutty, warm spicy, seperti ada kayu manisnya. Sedangkan kopi dari tanah Amerika umumnya memiliki rasa sedikit seperti cokelat dan karamel. Ini menurut orang-orang dari luar yaa... 
                    Pernah sekali waktu beli kopi Italia dapat kiriman dari seorang rekan, rasanya lebih mirip kopi yang well roasted, terasa pahit, tidak banyak campuran rasanya, dan lebih light dibanding kopi Indonesia.
                    Saya sendiri merasa kopi Indonesia saja sudah bervariasi rasanya..ga ada habisnya mencoba seluruh rasa kopi dari negeri sendiri..ga sempet cobain kopi-kopi dari luar (baca: ga cukup budget :p)
                    <br /><br />3. Coffee makes you feel so good
                    <br />Secara ilmiah memang bisa dibuktikan, bahwa kopi bisa meningkatkan dopamin kita (2). Itulah mengapa kita merasa lebih baik dan lebih bersemangat setelah menikmati secangkir kopi
                    Konsumsi kopi juga berdampak menurunkan level depresi- artinya bisa membuat anda lebih berbahagia (3) 
                    Can't wait to drink my coffee...
                    <br /><br /><br />(1) https://pdfs.semanticscholar.org/1747/e163168471a0d4e33c7a6276bfe7b03dfadb.pdf
                    <br />(2) https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1600-0773.1995.tb00111.x
                    <br />(3) https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/1105943        
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
} export default Artikelb;