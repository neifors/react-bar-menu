import React from 'react'
import logo from '../../img/LALINA.jpg'
import './index.css'

export function Homepage() {
   

   return(
      <div id='logo-homepage-wraper'>
         {/* <h1>BAR</h1> */}
         <img id="logo-homepage" src={logo} alt="Logo LALINA" /> 
      </div>
   )

}
