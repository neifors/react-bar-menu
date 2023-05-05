import React from 'react';
import logo from '../../img/LALINA2.png'
import './index.css';


export const Header = () => {

   return(
      <>
         <div id='logo-homepage-wraper'>
            <img id="logo-homepage" src={logo} alt="Logo LALINA" /> 
         </div>
      </>
   )
}
