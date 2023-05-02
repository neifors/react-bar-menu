import React from 'react';
import {NavLink} from 'react-router-dom'
import './index.css';


export const Header = () => {

   return(
      <nav id="nav-bar">         
         <div className="nav-bar-link"><NavLink to="/">HOME</NavLink></div>
         <div className="nav-bar-link"><NavLink to="/menu">MENÚ</NavLink></div>
         <div className="nav-bar-link"><NavLink to="/bebida">BEBIDAS</NavLink></div>
         <div className="nav-bar-link"><NavLink to="/brunch">DESAYUNOS</NavLink></div>
         <div className="nav-bar-link"><NavLink to="/">SÍGUENOS</NavLink></div>
      </nav>
   )
}
