import React from 'react';
import {NavLink} from 'react-router-dom'
import './index.css';


export const Header = () => {

   return(
      <nav id="nav-bar">         
         <div className="nav-bar-link"><NavLink to="/">HOME</NavLink></div>
         <div className="nav-bar-link"><NavLink to="/menu">MENU</NavLink></div>
         <div className="nav-bar-link"><NavLink to="/bebida">BEBIDA</NavLink></div>
         <div className="nav-bar-link"><NavLink to="/brunch">BRUNCH</NavLink></div>
         <div className="nav-bar-link"><NavLink to="/">SIGUENOS</NavLink></div>
      </nav>
   )
}
