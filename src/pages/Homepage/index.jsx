import React from 'react'
import {NavLink} from 'react-router-dom'
import './index.css'

export function Homepage() {
   

   return(
      <div id='homepage-wrapper'>
      <nav id="nav-bar">         
         {/* <div className="nav-bar-link" id='link-home'><NavLink to="/" className="link-text">EL BAR</NavLink></div> */}
         <div className="nav-bar-link" id='link-menu'><NavLink to="/menu" className="link-text">MENÚ</NavLink></div>
         <div className="nav-bar-link" id='link-bebidas'><NavLink to="/bebidas" className="link-text">BEBIDAS</NavLink></div>
         <div className="nav-bar-link" id='link-desayunos'><NavLink to="/desayunos" className="link-text">DESAYUNOS</NavLink></div>
         <div className="nav-bar-link" id='link-siguenos'><NavLink to="/" className="link-text">SÍGUENOS</NavLink></div>
         <div className="nav-bar-link" id='link-sugerencias'><NavLink to="/" className="link-text">SUGERENCIAS</NavLink></div>
      </nav>
      <div class="area" >
         <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
         </ul>
      </div >
      {/* <div id="bg-wrap">
         <svg viewBox="-20 0 50 100" preserveAspectRatio="xMidYMid slice">
         <defs>
         <radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5"><animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255, 0, 255, 1)"></stop><stop offset="100%" stop-color="rgba(255, 0, 255, 0)"></stop></radialGradient>
         <radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5"><animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255, 255, 0, 1)"></stop><stop offset="100%" stop-color="rgba(255, 255, 0, 0)"></stop></radialGradient>
         <radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5"><animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(0, 255, 255, 1)"></stop><stop offset="100%" stop-color="rgba(0, 255, 255, 0)"></stop></radialGradient>
         <radialGradient id="Gradient4" cx="50%" cy="50%" fx="4.56417%" fy="50%" r=".5"><animate attributeName="fx" dur="23s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(0, 255, 0, 1)"></stop><stop offset="100%" stop-color="rgba(0, 255, 0, 0)"></stop></radialGradient>
         <radialGradient id="Gradient5" cx="50%" cy="50%" fx="2.65405%" fy="50%" r=".5"><animate attributeName="fx" dur="24.5s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(0,0,255, 1)"></stop><stop offset="100%" stop-color="rgba(0,0,255, 0)"></stop></radialGradient>
         <radialGradient id="Gradient6" cx="50%" cy="50%" fx="0.981338%" fy="50%" r=".5"><animate attributeName="fx" dur="25.5s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255,0,0, 1)"></stop><stop offset="100%" stop-color="rgba(255,0,0, 0)"></stop></radialGradient>
         </defs>
         <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient4)">
         <animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite" />
         <animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite" />
         <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="17s" repeatCount="indefinite"/>
         </rect> */}
         {/* <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient5)">
         <animate attributeName="x" dur="23s" values="0%;-25%;0%" repeatCount="indefinite" />
         <animate attributeName="y" dur="24s" values="25%;-25%;25%" repeatCount="indefinite" />
         <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="18s" repeatCount="indefinite"/>
         </rect>
         <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient6)">
         <animate attributeName="x" dur="25s" values="-25%;0%;-25%" repeatCount="indefinite" />
         <animate attributeName="y" dur="26s" values="0%;-25%;0%" repeatCount="indefinite" />
         <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="19s" repeatCount="indefinite"/>
         </rect> */}
         {/* <rect x="13.744%" y="1.18473%" width="100%" height="100%" fill="url(#Gradient1)" transform="rotate(334.41 50 50)"><animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite"></animate><animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="7s" repeatCount="indefinite"></animateTransform></rect>
         <rect x="-2.17916%" y="35.4267%" width="100%" height="100%" fill="url(#Gradient2)" transform="rotate(255.072 50 50)"><animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite"></animate><animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="12s" repeatCount="indefinite"></animateTransform>
         </rect>
         <rect x="9.00483%" y="14.5733%" width="100%" height="100%" fill="url(#Gradient3)" transform="rotate(139.903 50 50)"><animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite"></animate><animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="9s" repeatCount="indefinite"></animateTransform>
         </rect>
         </svg>
      </div> */}
      </div>
   )

}
