import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Kujdesi_bazik_për_të_porsalindurin } from '../../asset/img_foshnja';
import { Delvina, Rinesa, Anila, Donika } from '../../asset/img_workers.js'
import './about_us.css'





const About_us = () => {
  return (
    <div style={{height: 'fit-content'}}>
      <NavBar/>
      <div style={{
      width: '100vw',
      height: 'fit-content',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyItems: 'center',
  
     }}>
        <p className='about_text' style={{width: '70%' , fontFamily: 'Abhaya Libre', color:'#ef5a75b9', letterSpacing:'10%',margin: 5,  textAlign: 'center'}}><span style={{color:'#EF5A76'}}>OMEN</span> është një organizatë e përkushtuar për <span style={{color:'#EF5A76'}}>edukimin, informimin dhe mbështetjen </span>e nënave dhe familjeve në çdo hap të rrugëtimit të tyre — nga planifikimi familjar, shtatzënia dhe lindja, deri te kujdesi për foshnjën që vjen në jetë. <br/>Ne <span style={{color:'#EF5A76'}}>synojmë</span> që çdo nënë të ndihet e informuar, e sigurt dhe e mbështetur në këtë periudhë të veçantë të jetës.</p>
      </div>

        <div className='workers' style={{width:'100%',  }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <img src={Delvina}  style={{  borderRadius: "50%", objectFit: "cover" }} />
          <h3 style={{ marginTop: 15, marginBottom: 0, fontWeight: "600", color: '#EF5A76'}}>Delvina Bytyqi</h3>
          <p style={{ margin: "0px",  color: '#ef5a75b9' }}>Mami e diplomuar – në proces licencimi</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <img src={Rinesa}  style={{ borderRadius: "50%", objectFit: "cover",}} />
          <h3 style={{ marginTop: 15, marginBottom: 0,  fontWeight: "600", color: '#EF5A76'}}>Rinesa Dushi</h3>
          <p style={{ margin: "0px",  color: '#ef5a75b9' }}>Mami - në proces të diplomimit</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <img src={Donika}  style={{ borderRadius: "50%", objectFit: "cover" }} />
          <h3 style={{ marginTop: 15, marginBottom: 0,  fontWeight: "600", color: '#EF5A76'}}>Donika Mazreku</h3>
          <p style={{ margin: "0px",  color: '#ef5a75b9' }}>Mami e diplomuar – në proces licencimi</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <img src={Anila}  style={{ borderRadius: "50%", objectFit: "cover" }} />
          <h3 style={{ marginTop: 15, marginBottom: 0, fontWeight: "600", color: '#EF5A76'}}>Anila Thaçi</h3>
          <p style={{ margin: "0px",  color: '#ef5a75b9' }}>Mami e diplomuar – në proces licencimi</p>
        </div>
        </div> 
    </div>
  )
}

export default About_us
