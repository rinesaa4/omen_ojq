import React from 'react';
import "./Main.css" 
import NavBar from "../../components/NavBar/NavBar"
import {Pic1,Pic2,Pic3, Subtract1, Subtract2, Subtract3} from '../../asset/img_main_index.js'
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer.js';

const Main = () => {

  return (
    <div style={{width: "100%"}}>
    <NavBar/>
    <div className='main' style={{display:'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: 100}}>
      <div className='hero'>
      <div className='hero_info'>
       <h2>Organizata për Mbështetjen e Nënave</h2>
       <p>“Shoqata synon të rrisë ndërgjegjësimin e nënave për procesin e lindjes dhe rëndësinë e kujdesit prenatal (gjatë shtatzënisë) dhe postnatal (pas lindjes).”</p>
      </div>

       <div className='container'>
         <div className='container_subtract'>
          <p>Mbështetje profesionale dhe emocionale për nënat para dhe pas lindjes!</p>
         <img src={Pic1}/>
         </div>
         
       </div>
       <div className='container2'>
         <div className='container_subtract2'>
          <img src={Pic2}/>
          <p>Planifikim familjar për një të ardhme më të sigurt!</p>
         </div>
         
       </div>
       <div className='container3'>
         <div className='container_subtract3'>
          <p>Hapësira të sigurta për ndarje përvojash dhe këshillim profesional të qasshëm</p>
         <img src={Pic3}/>
         </div>
         
       </div>
       
   
       
       </div>

       <Link to="/contact"><button style={{
        backgroundColor: '#f44565e2',
        border: 'none',
        borderRadius: '100px',
        color: 'white',
        fontFamily: "Abhaya Libre",
        letterSpacing: '5%'
       }}>Jemi këtu për ju – na kontaktoni!</button></Link>
      </div>
    <Footer/>  
    </div>
  )
}

export default Main
