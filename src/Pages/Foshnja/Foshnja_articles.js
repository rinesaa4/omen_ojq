import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Article_container from '../../components/Article_container'
import {
 Kujdesi_bazik_për_të_porsalindurin,
 Ushqyerja_me_gji_dhe_përfitimet_e_saj,
 Zhvillimi_i_foshnjës_muaj_pas_muaji,
 Shenjat_kur_foshnja_duhet_dërguar_te_mjeku
} from '../../asset/img_foshnja'
import '../pages.css'

const Foshnja_articles = () => {
  return (
    <div>
      <NavBar />
      <div className='articles_h' style={{width: '100%', backgroundColor: '#EF5A76', display:'flex', alignItems: 'center', justifyContent: 'center',color: '#fffffd',fontFamily: 'Abhaya Libre',letterSpacing: "20%",}}>FOSHNJA</div>
       <div className='articles' style={{
        width: '100%', height: 'fit-content', display: 'grid',
        justifyContent: 'center', 
       
       }}>
         <Article_container classType='article' article_img={Ushqyerja_me_gji_dhe_përfitimet_e_saj} context="Ushqyerja me gji dhe përfitimet e saj." link_page="/ushqyerja_me_gji_dhe_përfitimet_e_saj" />  
       <Article_container classType='coming_soon' article_img={Kujdesi_bazik_për_të_porsalindurin} context="Kujdesi bazik për të porsalindurin." link_page="" />
      
       <Article_container classType='coming_soon' article_img={Zhvillimi_i_foshnjës_muaj_pas_muaji} context="Zhvillimi i foshnjës muaj pas muaji." link_page="" />
       <Article_container classType='coming_soon' article_img={Shenjat_kur_foshnja_duhet_dërguar_te_mjeku} context="Shenjat kur foshnja duhet dërguar te mjeku." link_page="" />
       </div>
    </div>
  )
}

export default Foshnja_articles
