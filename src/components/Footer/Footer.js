import React from 'react'
import { Logo_Omen } from '../../asset/img_navbar_index'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer' style={{ width:" 100%", backgroundColor: '#fff8f9', boxShadow: '0px 10px 30px #ef5a75b9', overflow: 'hidden'}}>
      <div > <img  src={Logo_Omen}/> </div>

      <div style={{ paddingLeft: 30, }}> 
        <Link to='/planifikimi_familjar' style={{textDecoration: "none"}}><p style={{ fontFamily: 'Abhaya Libre', color:'#EF5A76', letterSpacing:'5%',margin: 10}} >Planifikim familjar</p></Link>
        <Link to='/shtatzenia' style={{textDecoration: "none"}}><p style={{ fontFamily: 'Abhaya Libre', color:'#EF5A76', letterSpacing:'5%',margin: 10}}>Shtatzënia</p></Link>
        <Link to='/lindja' style={{textDecoration: "none"}}><p style={{ fontFamily: 'Abhaya Libre', color:'#EF5A76', letterSpacing:'5%',margin: 10}}>Lindja</p></Link>
        <Link to='/foshnja' style={{textDecoration: "none"}}><p style={{fontFamily: 'Abhaya Libre', color:'#EF5A76', letterSpacing:'5%',margin: 10}}>Foshnja</p></Link>
      </div>
      <div style={{paddingLeft:30,  }}> 
        <span style={{marginBottom: 10}}>
          <p style={{ fontFamily: 'Abhaya Libre', color:'#ef5a75b9', letterSpacing:'5%', margin: 5,}}>Kontaktoni: </p>
          <p style={{ fontFamily: 'Abhaya Libre', color:'#EF5A76', letterSpacing:'5%',margin: 5}} >omen.ojq@gmail.com</p>
          <p style={{ fontFamily: 'Abhaya Libre', color:'#EF5A76', letterSpacing:'5%', margin: 5}}>049181102</p>
        </span>
        <span style={{}}>
        <p style={{ fontFamily: 'Abhaya Libre', color:'#ef5a75b9', letterSpacing:'5%', margin: 5}}>Rrjetet sociale:</p>
        <a href='https://www.instagram.com/omenojq/' target="_blank" style={{textDecoration: 'none'}}><p style={{fontFamily: 'Abhaya Libre', color:'#EF5A76', letterSpacing:'5%', margin: 5}}>instagram: @omenojq</p></a>
        <p style={{ fontFamily: 'Abhaya Libre', color:'#EF5A76', letterSpacing:'5%', margin: 5}}>facebook</p>
        </span>
      </div>
      
    </div>
  )
}

export default Footer
