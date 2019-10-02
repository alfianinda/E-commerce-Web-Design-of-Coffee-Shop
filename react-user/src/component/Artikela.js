import React, { Component } from 'react';
import './../style/gayaku.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Jumbotron from './Jumbotron';
import Footer from './Footer';


class Artikela extends Component 
{
    render() 
    { 
        return (
        <div> 
		<Header/>

            {/* Container (About Section) */}
            <div className="container" style={{marginTop: 150}}><h1><b>Manfaat minum kopi bagi kesehatan berdasarkan sains</b></h1></div>
                    <div className="container" style={{marginTop: 30}}>
                    <div className="row">
                        <div className="col-sm-4">
                        <div className="thumbnail item">
                            <a href="./Artikela">
                            <img src="images/artikel/artikela.jpg" alt="COFFEES" />     
                            </a>
                        </div>
                        </div>
                        <div className="col-sm-8" style={{textAlign: 'justify'}}>
                        <p>Minum kopi sebenarnya sehat lho. Mau tahu kenapa?
                            <br />Mari kita simak bersama penjelasannya..
                            <br /><br />1. Kopi bisa meningkatkan level energi dan membuat kamu lebih cerdas
                            <br /><br />Barangkali ini yang sebenarnya mayoritas dirasakan oleh penggemar kopi. Pengalaman penulis sendiri, kopi jadi energy booster di kantor dan memunculkan ide-ide baru. Menarik kaan??
                            <br /><br />Kopi memang bisa membantu penikmatnya menjadi bersemangat karena meningkatkan level energi di tubuh. Efek ini disebabkan oleh kandungan senyawa stimulan psikoaktif yang disebut kafein. Lalu bagaimana cara kerjanya??
                            <br />Setelah kamu minum kopi, kafein akan terserap ke dalam aliran darah di tubuh dan dalam prosesnya akan menuju ke otak (1). Nah dari sinilah kafein bekerja dengan menghambat adenosin, yaitu senyawa neurotransmitter yang umum ditemukan di tubuh, termasuk di otak. Dengan terhambatnya kerja adenosin, neurotransmitter lain seperti norepinefrin dan dopamin akan bertambah dan menyebabkan meningkatnya aktivitas neuron (2, 3).
                            <br /><br />Yang lebih meyakinkan lagi, sudah cukup banyak uji klinis yang menunjukkan bahwa kopi bisa meningkatkan beberapa aspek pada fungsi otak. Diantaranya meningkatkan memori, mood, kewaspadaan, level energi, kecepatan reaksi, dan fungsi kognitif secara umum (4,5).
                            <br /><br />Wah pantas saja ya kita jadi bersemangat '45 setelah minum kopi.
                            Produktivitas meningkat, negara juga ikut majuuuu!!!
                            <br /><br />2. Kopi dapat membantu kamu membakar lemak lebih banyak
                            <br /><br />Tahukah kamu kalau kafein hampir selalu ditemukan di setiap suplemen komersial untuk membakar lemak? Tentunya ada alasannya dong.. 
                            Nah ternyata kafein ini termasuk satu dari sedikit bahan alami yang terbukti membantu pembakaran lemak. Dari beberapa studi ilmiah, kafein bisa membantu meningkatkan reaksi metabolik di tubuh kita(6,7). Dan, yang lebih menarik lagi, studi juga menunjukkan bahwa kafein secara spesifik dapat meningkatkan pembakaran lemak sebesar 10% pada individu obese dan 29% pada individu dengan berat badan normal (8).
                            <br />Tetap ada kemungkinan bahwa efek ini akan menurun setelah konsumsi kopi dalam jangka waktu yang lama.
                            <br /><br />3. Kopi dapat memungkinkan turunnya resiko diabetes tipe II
                            Diabetes tipe II merupakan salah satu problem kesehatan yang cukup serius. Ditandai dengan tingginya gula dalam darah akibat resistensi insulin atau ketidakmampuan tubuh dalam menghasilkan cukup insulin.
                            <br /><br />Ternyata dengan meminum kopi, kita dapat menurunkan resiko diabetes tipe II secara signifikan. Studi ilmiah menunjukkan bahwa orang-orang yang meminum kopi dapat menurunkan 25% hingga 30% resiko penyakit ini (9)
                            <br /><br />4. Kopi dapat melawan depresi dan membuatmu lebih bahagia :)
                            <br /><br />Depresi merupakan gangguan kesehatan mental yang dapat menyebabkan penurunan kualitas hidup. Di Amerika Serikat saja, sekitar 4.1% orang sudah memenuhi kriteria gangguan kesehatan ini.
                            <br /><br />Studi dari Harvard menyebutkan, wanita yang meminum 4 gelas kopi sehari memiliki 20% resiko yang lebih rendah untuk mengalami depresi (10).
                            <br /><br /><br />(1) https://www.sciencedirect.com/science/article/pii/0024320582907159
                            <br />(2) https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1600-0773.1995.tb00111.x
                            <br />(3) https://www.ncbi.nlm.nih.gov/pubmed/1356551
                            <br />(4) https://onlinelibrary.wiley.com/doi/full/10.1111/j.1467-3010.2007.00665.x
                            <br />(5) https://link.springer.com/article/10.1007/s00213-002-1175-2
                            <br />(6) https://www.ncbi.nlm.nih.gov/pubmed/2912010
                            <br />(7) https://www.ncbi.nlm.nih.gov/pubmed/7486839
                            <br />(8) https://www.ncbi.nlm.nih.gov/pubmed/14684395
                            <br />(9) https://link.springer.com/article/10.1007%2Fs00125-009-1516-3
                            <br />(10) https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/1105943
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
} export default Artikela;