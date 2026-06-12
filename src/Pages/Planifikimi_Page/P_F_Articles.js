import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Article_container from '../../components/Article_container'
import { P_F_Pic1 } from '../../asset/img_article_idex'
import { Metodat_kontraceptive_moderne, Edukimi_seksual_dhe_shëndeti_riprodhues, Ndikimi_i_stilit_të_jetesës_në_fertilitet, Planifikimi_i_shtatzënisë_së_shëndetshme} from '../../asset/img_planifikimi_familjar'
import '../pages.css'
const P_F_Articles = () => {
  return (
    <div>
      <NavBar/>
      <div className='main' >
       <div className='articles_h' style={{width: '100%', backgroundColor: '#EF5A76', display:'flex', alignItems: 'center', justifyContent: 'center',color: '#fffffd',fontFamily: 'Abhaya Libre',letterSpacing: "20%",}}>PLANIFIKIMI FAMILJAR</div>
       <div className='articles' style={{
        width: '100%', height: 'fit-content', display: 'grid',
         justifyContent: 'center', 
       
       }}>
        <Article_container  classType='coming_soon' article_img={Metodat_kontraceptive_moderne} context="Metodat kontraceptive moderne." link_page="/pergaditja_fizike"/>
      
        <Article_container  classType='coming_soon' article_img={Edukimi_seksual_dhe_shëndeti_riprodhues} context="Edukimi seksual dhe shëndeti riprodhues." link_page="/"/>

        <Article_container  classType='coming_soon' article_img={Ndikimi_i_stilit_të_jetesës_në_fertilitet} context="Ndikimi i stilit të jetesës në fertilitet." link_page="home"/>
      
        <Article_container  classType='coming_soon' article_img={Planifikimi_i_shtatzënisë_së_shëndetshme} context="Planifikimi i shtatzënisë së shëndetshme." link_page="home"/>
       </div>
      </div>
      
    </div>
  )
}

export default P_F_Articles
