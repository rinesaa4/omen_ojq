import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Article_container from '../../components/Article_container'
import {Lindja_natyrale,Lindja_me_prerja_cezariane,Fazat_e_lindjes,Menaxhimi_i_dhimbjeve_gjatë_lindjes,
Rikuperimi_pas_lindjes} from '../../asset/img_lindja'
import '../pages.css'
const Lindja_articles = () => {
  return (
    <div>
      <NavBar/>
      <div className='main' >
       <div className='articles_h' style={{width: '100%', backgroundColor: '#EF5A76', display:'flex', alignItems: 'center', justifyContent: 'center',color: '#fffffd',fontFamily: 'Abhaya Libre',letterSpacing: "20%",}}>LINDJA</div>

       <div className='articles' style={{
        width: '100%', height: 'fit-content', display: 'grid',
         justifyContent: 'center',
       
       }}>

       <Article_container classType='article' article_img={Lindja_me_prerja_cezariane} context="Lindja me prerja cezariane." link_page="/lindja_me_prerja_cezariane" />
       <Article_container classType='coming_soon' article_img={Lindja_natyrale} context="Lindja natyrale." link_page="" />
      <Article_container classType='coming_soon' article_img={Fazat_e_lindjes} context="Fazat e lindjes." link_page="" />
      <Article_container classType='coming_soon' article_img={Menaxhimi_i_dhimbjeve_gjatë_lindjes} context="Menaxhimi i dhimbjeve gjatë lindjes." link_page="" />
      <Article_container classType='coming_soon' article_img={Rikuperimi_pas_lindjes} context="Rikuperimi pas lindjes." link_page="" />

       </div>
      </div>
    </div>
  )
}

export default Lindja_articles
