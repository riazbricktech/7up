import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage/LandingPage';
import FormPage from '../pages/Form/FormPage';
import Spinner from '../pages/Spinner/Spinner';
import WinningPage from '../pages/WinningPage/WinningPage';
import NicForm from '../pages/NicForm/NicForm';
// import Wrapper from '../reusableComponents/Wrapper/Wrapper';


const Routing = () => {
  return (
    <div>
        
        <BrowserRouter>
          <Routes>
            {/* <Route element={<Wrapper/>} path='/'> */}
            <Route element={<LandingPage/>} path='/' />

            <Route element={<FormPage/>} path='/form' />
            <Route element={<Spinner/>} path='/spin' />
            <Route element={<WinningPage/>} path='/winner' />
            <Route element={<NicForm/>} path='/nicform' />

            {/* </Route> */}

          </Routes>
        </BrowserRouter>
       
    </div>
  )
}

export default Routing;