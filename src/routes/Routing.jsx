import React, { useEffect, useLayoutEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';
import FormPage from '../pages/Form/FormPage';
import Spinner from '../pages/Spinner/Spinner';
import WinningPage from '../pages/WinningPage/WinningPage';
import NicForm from '../pages/NicForm/NicForm';
import LossPage from '../pages/LossPage/LossPage';
import CongratulationPage from '../pages/CongratulationPage/CongratulationPage';
import UsedCap from '../pages/UsedCap/UsedCap';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import TransactionFailedPage from '../pages/TransactionFailedPage/TransactionFailedPage';
import LayoutRoute from './LayoutRoute';
import {  useNavigate } from 'react-router-dom';
import { canCode, bottleCode } from '../constant/Codes';
import { useSelector} from "react-redux";

const Routing = () => {
  const navigate = useNavigate();
  const qrCode = useSelector(state => state?.qrCode?.qrCodeNumber);

  // useEffect(() => {


  //   if (qrCode === `/${bottleCode}`) {
  //     navigate('/');
  //   }
  //   if (qrCode === `/${canCode}`) {
  //     navigate('/form');
  //   }
  // }, [qrCode]);

  return (
    <div>
      <Routes>
        <Route element={<LayoutRoute />} path='/'>
          <Route element={<LandingPage />} path='/' />
          <Route element={<FormPage />} path='/form' />
          <Route element={<Spinner />} path='/spin' />
          <Route element={<WinningPage />} path='/winner' />
          <Route element={<NicForm />} path='/cnic' />
          <Route element={<LossPage />} path='/loss' />
          <Route element={<CongratulationPage />} path='/congrats' />
          <Route element={<UsedCap />} path='/usedcap' />
          <Route element={<TransactionFailedPage />} path='/transactionfailed' />
          <Route element={<NotFoundPage />} path='*' />
        </Route>
      </Routes>
    </div>
  );
};

export default Routing;
