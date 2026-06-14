import React, { useState } from 'react'
import './NavBar.css'
import  {Logo_Omen, menu,phone, search, users, x} from "../../asset/img_navbar_index.js"
import { Link } from 'react-router-dom'
import About_us from '../about_us/About_us.js'


const NavBar = () => {
   
  const [toggel, setToggle]= useState("close");
  // menu 
  function handlelClick(){
    if(toggel ==='close'){
      setToggle('open')
    }else {
      setToggle('close');
    }
    
  }
 console.log(toggel)
  return (
    <div >
      <div className='navBar'>
      
      <div className='navBar_menu'>
       <img onClick={handlelClick}  src={menu}/>
      
       {/* <section className='navBar_menu_search'>
       <img width="20px" src={search}/>
       <input value='' placeholder='search...' />
       </section> */}
      
      </div>
      <div className='navBar_logo'>
       <Link to="/"><img src={Logo_Omen}/></Link> 
      </div>
      <div className='navBar_info'>
      <Link to="/contact"><img src={phone}/></Link>
      <Link to="/about_us"><img  src={users}/></Link>
      </div>
      
    </div>
      <div className={toggel} style={{
            width: "220px",
            height: '100vh',
            backgroundColor: 'white',
            zIndex: 10,
            boxShadow: '5px 0px 10px rgb(172, 172, 172)',
            position: 'fixed',
            top: 0,
            transition: "left 1.5s ease 0s",
            }}>
           <div className='kategorit' style={{
            height: '70px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'end',
            justifyContent: 'space-between',
            padding: "20px",
            borderBottom: '1px solid #EF5A76',
            color: "#EF5A76",
         
           }}>
            Kategoritë
            <img onClick={handlelClick}width='25px' src={x}/>
           </div>
           <div style={{
            height: 'fit-content' ,
            display: 'flex',
            flexDirection: 'column',
            padding: '20px 10px',
         
           }}>
            <div className='text'>
            <Link style={{
              textDecoration:'none',
            }}to="/planifikimi_familjar"><p>Planifikimi Familjar</p></Link> 
            </div>

            <div className='text' >
            <Link style={{
              textDecoration:'none',
            }}to="/shtatzenia"><p>Shtatzënia</p></Link> 
            </div>
            <div className='text' >
            <Link style={{
              textDecoration:'none',
            }} to="/lindja"> <p>Lindja</p> </Link> 
            </div>
            <div className='text' >
             <Link style={{
              textDecoration:'none',
            }} to='/foshnja'> <p>Foshnja</p> </Link> 
            </div>
            
           
           </div>
            
          </div>
    </div>
   
  )
}

export default NavBar
