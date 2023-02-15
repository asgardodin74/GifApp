import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import { AddCategory } from './componentes/AddCategory';
import './styles.css';
ReactDOM.createRoot(document.getElementById('root')).render(
 //React.STrictMode lanza dos veces la informacion sobre la consola
 <React.StrictMode> 
    <GifExpertApp /> 
  </React.StrictMode>,
)
