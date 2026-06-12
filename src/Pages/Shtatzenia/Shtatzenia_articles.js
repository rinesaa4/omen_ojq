import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Article_container from '../../components/Article_container'
import {Ushqyerja_gjatë_shtatzënisë, Kujdesi_prenatal_dhe_kontrollet_rutinë, Komplikimet_më_të_zakonshme_në_shtatzëni, Përgatitja_për_ardhjen_e_bebit} from '../../asset/img_shtatzenia'
import '../pages.css'


const Shtatzenia_articles = () => {
  return (
    <div>
      <NavBar />
      <div className='articles_h' style={{width: '100%', backgroundColor: '#EF5A76', display:'flex', alignItems: 'center', justifyContent: 'center',color: '#fffffd',fontFamily: 'Abhaya Libre',letterSpacing: "20%",}}>SHTATZËNIA</div>
       <div className='articles' style={{
        width: '100%', height: 'fit-content', display: 'grid',
        justifyContent: 'center', 
       
       }}>

        <Article_container  classType='article' article_img={Ushqyerja_gjatë_shtatzënisë} context="Ushqyerja gjatë shtatzënisë." link_page="/ushqyerja_gjatë_shtatzënisë"/>
        <Article_container  classType='coming_soon' article_img={Kujdesi_prenatal_dhe_kontrollet_rutinë} context="Kujdesi prenatal dhe kontrollet rutinë." link_page="/pergaditja_fizike"/>
        <Article_container  classType='coming_soon' article_img={Komplikimet_më_të_zakonshme_në_shtatzëni} context="Komplikimet më të zakonshme në shtatzëni." link_page="/pergaditja_fizike"/>
        <Article_container  classType='coming_soon' article_img={Përgatitja_për_ardhjen_e_bebit} context="Përgatitja për ardhjen e bebit." link_page="/pergaditja_fizike"/>


       </div>
    </div>
  )
}

export default Shtatzenia_articles
