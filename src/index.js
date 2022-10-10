import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route , Routes} from 'react-router-dom';
import Index from './pages/index/index.jsx';
import Listar from './components/listar/Listar.js';
import Actualizar from './components/actualizar/Actualizar2.js';
import Registrarusuario from './components/registrarusuario/Registrarusuario.js';
import Login from './pages/login/login.jsx';
import Registrar from './pages/Registrar/registrar.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Index/>} />
  <Route path='/listar' element={<Listar/>} />
  <Route path='/actualizar' element={<Actualizar/>} />
  <Route path='/registrarusuario' element={<Registrarusuario/>} />
  <Route path='/login' element={<Login/>} />
  <Route path='/registrar' element={<Registrar/>} />
  <Route path='/dashboard' element={<Dashboard/>} />
  </Routes>
  </BrowserRouter>
);