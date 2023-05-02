import React from 'react'
import {NavLink} from 'react-router-dom'
import './index.css'

export function Homepage() {
   

   return(
      <nav id="nav-bar">         
         {/* <div className="nav-bar-link" id='link-home'><NavLink to="/" className="link-text">EL BAR</NavLink></div> */}
         <div className="nav-bar-link" id='link-menu'><NavLink to="/menu" className="link-text">MENÚ</NavLink></div>
         <div className="nav-bar-link" id='link-bebidas'><NavLink to="/bebidas" className="link-text">BEBIDAS</NavLink></div>
         <div className="nav-bar-link" id='link-desayunos'><NavLink to="/desayunos" className="link-text">DESAYUNOS</NavLink></div>
         <div className="nav-bar-link" id='link-siguenos'><NavLink to="/" className="link-text">SÍGUENOS</NavLink></div>
         <div className="nav-bar-link" id='link-sugerencias'><NavLink to="/" className="link-text">SUGERENCIAS</NavLink></div>
      </nav>
   )

}
