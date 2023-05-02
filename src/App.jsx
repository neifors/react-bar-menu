import React from 'react'
import * as Pages from './pages';
import {Routes, Route} from 'react-router-dom'
import { Layout } from './layout';
import './App.css';

const App = () => {  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Pages.Homepage/>}/>
          <Route path='menu' element={<Pages.Menu/>}/>
          <Route path='bebidas' element={<Pages.Bebida/>}/>
          <Route path='desayunos' element={<Pages.Brunch/>}/>
        </Route>
      </Routes>
    </>
  )
};

export default App;
