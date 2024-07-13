import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage/LandingPage';
import FormPage from '../pages/Form/FormPage';
import Spinner from '../pages/Spinner/Spinner';


const Routing = () => {
  return (
    <div>
        
        <BrowserRouter>
          <Routes>
            <Route element={<LandingPage/>} path='/' />

            <Route element={<FormPage/>} path='/form' />
            <Route element={<Spinner/>} path='/spin' />

          </Routes>
        </BrowserRouter>
       
    </div>
  )
}

export default Routing;