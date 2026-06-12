import React from 'react'
import NavBar from '../NavBar/NavBar'
import "./contact.css"

const Contact = () => {

  return (
    <div style={{height:'fit-content', overflow: 'hidden'}}>
     <NavBar />
     <div style={{ display: 'flex',flexDirection: 'column',alignItems: 'center', width: '100vw',}}>
     <div style={{
      width: 'fit-content',
      height: 'fit-content',
      marginTop: 50,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      justifyContent: 'center',
      padding:25,
      borderLeft: '1px solid #ef5a7588',

     }}>
      <div style={{width:'fit-content',marginBottom: 50}}>
        <p className='contact_info' style={{ fontFamily: 'Abhaya Libre', color:'#ef5a7591', letterSpacing:'5%', margin: 5,}}>Mund të na kontaktoni në: </p>
        <p style={{fontSize: 22, fontFamily: 'Abhaya Libre', color:'#EF5A76', letterSpacing:'5%',margin: 5}} >omen.ojq@gmail.com</p>
        <p style={{fontSize: 22, fontFamily: 'Abhaya Libre', color:'#EF5A76', letterSpacing:'5%', margin: 5}}>049181102</p>
        </div>
      <div style={{width:'fit-content', }}>
        <p className='contact_info' style={{ fontFamily: 'Abhaya Libre', color:'#ef5a7591', letterSpacing:'5%', margin: 5}}>Rrjetet sociale:</p>
        <a href='https://www.instagram.com/omenojq/' target="_blank" style={{textDecoration: 'none'}}><p style={{fontSize:22, fontFamily: 'Abhaya Libre', color:'#EF5A76', letterSpacing:'5%', margin: 5}}>instagram: @omenojq</p></a>
        <p style={{fontSize: 22, fontFamily: 'Abhaya Libre', color:'#EF5A76', letterSpacing:'5%', margin: 5}}>facebook</p>
        </div>

     </div>

     
    </div>
   </div>
  )
}

export default Contact
