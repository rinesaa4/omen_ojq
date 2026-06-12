import {React, useEffect} from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Lenis from 'lenis';
import Footer from '../../components/Footer/Footer';
import '../pages.css'

export default function Ushqyerja_me_gji_dhe_përfitimet_e_saj_TEXT() {

   useEffect(()=>{
    const lenis = new Lenis();
    function raf(time){
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <div>
       <NavBar />
  <div className='articles_h' style={{width: '100%', backgroundColor: '#EF5A76', display:'flex', alignItems: 'center', justifyContent: 'center',color: '#fffffd',fontFamily: 'Abhaya Libre',letterSpacing: "10%",}}>USHQYERJA ME GJI DHE PËRFITIMET E SAJ</div>
      <div className='main_context' style={{display: 'flex', justifyContent: 'center',marginBottom:50, marginTop: 10,}} >
        
      <p style={{  fontFamily:'Abhaya Libre', letterSpacing: '10%'}}>
      Ushqyerja me gji është mënyra më natyrale dhe më e shëndetshme për të ushqyer foshnjën gjatë muajve të parë të jetës. Qumështi i gjirit përmban të gjitha vlerat ushqyese që i nevojiten bebit për rritje dhe zhvillim të shëndetshëm. Përveç ushqimit, ushqyerja me gji krijon edhe lidhje të fortë emocionale mes nënës dhe foshnjës, duke i dhënë bebit ndjenjë sigurie dhe afërsie.
      <br/><br/>
      <span style={{color:'#EF5A76'}}>Qumështi i gjirit është i pasur</span> me proteina, vitamina, yndyrna të shëndetshme dhe antitrupa që ndihmojnë në forcimin e sistemit imunitar të foshnjës. Foshnjat që ushqehen me gji kanë më pak rrezik për infeksione, alergji, probleme me tretjen dhe sëmundje të frymëmarrjes. Gjithashtu, ushqyerja me gji ndihmon në zhvillimin e trurit dhe sistemit nervor të bebit. Qumështi i parë që prodhohet pas lindjes, i quajtur <span style={{color:'#EF5A76'}}>kolostrum</span>, është veçanërisht i rëndësishëm sepse përmban shumë antitrupa dhe ndihmon në mbrojtjen e foshnjës nga infeksionet.
      <br/><br/>
      <span style={{color:'#EF5A76'}}>Përfitime të shumta ka edhe për nënën</span>. Ushqyerja me gji ndihmon në tkurrjen më të shpejtë të mitrës pas lindjes dhe zvogëlon gjakderdhjen pas lindjes. Gjithashtu, mund të ulë rrezikun e kancerit të gjirit dhe vezoreve, si dhe ndihmon në rikthimin gradual të peshës trupore. Për shumë nëna, ushqyerja me gji krijon ndjenjë afërsie dhe qetësie emocionale me foshnjën.
      <br/><br/>
      Megjithëse ushqyerja me gji është natyrale, në fillim mund të shoqërohet me vështirësi si lodhje, pasiguri ose dhimbje të lehta. Për këtë arsye, mbështetja nga familja dhe profesionistët shëndetësorë është shumë e rëndësishme.<span style={{color:'#EF5A76'}}> Pozicionimi i duhur </span>i foshnjës gjatë ushqyerjes ndihmon që bebja të kapë gjirin si duhet dhe procesi të bëhet më i rehatshëm për nënën dhe foshnjën. Një nga pozicionet më të përdorura është pozicioni klasik, ku nëna e mban foshnjën në krah pranë gjoksit. Pozicioni “cross-cradle” ndihmon në kontrollimin më të mirë të kokës së foshnjës, ndërsa pozicioni “futboll hold” është shumë i përshtatshëm për nënat pas prerjes cezariane, sepse shmang presionin mbi plagën. Gjithashtu, pozicioni shtrirë anash i lejon nënës të pushojë gjatë ushqyerjes, sidomos gjatë natës. Ushqyerja e shpeshtë ndihmon në rritjen e prodhimit të qumështit dhe siguron që foshnja të marrë ushqimin e nevojshëm për zhvillim të shëndetshëm.
      <br/><br/>
      Organizatat shëndetësore <span style={{color:'#EF5A76'}}> rekomandojnë ushqyerjen ekskluzive me gji</span> gjatë gjashtë muajve të parë të jetës, pasi qumështi i gjirit plotëson të gjitha nevojat ushqyese të foshnjës. Edhe pas fillimit të ushqimeve shtesë, ushqyerja me gji rekomandohet të vazhdojë për aq kohë sa nëna dhe foshnja dëshirojnë.
      <br/><br/>
      Në përfundim, ushqyerja me gji është një dhuratë e çmuar për shëndetin e foshnjës dhe të nënës. Ajo siguron ushqim të plotë, mbrojtje nga sëmundjet dhe krijon lidhje të fortë emocionale mes nënës dhe bebit.
      <br/><br/>

      </p>
      </div>

      <Footer />
    </div>
  )
}
