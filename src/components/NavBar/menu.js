import React from 'react'
import {x} from "../../asset/img_navbar_index.js"

const Menu = () => {
  return (
    <div className='slide_menu' style={{
      width: "250px",
      height: '100vh',
      backgroundColor: 'red',
      zIndex: 10,
      position: 'fixed',
      top: 0,
      
    }}>
     <div>
      Kategorit
      <img width='25px' src={x}/>
     </div>
     <div>

     </div>
      
    </div>
  )
}

export default Menu
