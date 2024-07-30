// import React, { useEffect, Suspense, lazy } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { canCode, bottleCode } from '../constant/Codes';
// import { useSelector } from "react-redux";
// import LayoutRoute from './LayoutRoute';
// import LoaderPage from '../reusableComponents/Loader/Loader';

// // Lazy load components
// const LandingPage = lazy(() => import('../pages/LandingPage/LandingPage'));
// const FormPage = lazy(() => import('../pages/Form/FormPage'));
// const Spinner = lazy(() => import('../pages/Spinner/Spinner'));
// const WinningPage = lazy(() => import('../pages/WinningPage/WinningPage'));
// const JazzCash = lazy(() => import('../pages/JazzCash/JazzCash'));
// const CongratulationPage = lazy(() => import('../pages/CongratulationPage/CongratulationPage'));
// const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
// const TransactionFailedPage = lazy(() => import('../pages/TransactionFailedPage/TransactionFailedPage'));
// const AnimationBottle = lazy(() => import('../pages/AnimationBottle/AnimationBottle'));
// const HealthPage = lazy(() => import('../pages/HealthPage/HealthPage'));

// const Routing = () => {
//   const navigate = useNavigate();
//   const qrCode = useSelector(state => state?.qrCode?.qrCodeNumber);

//   useEffect(() => {
//     if (qrCode === `/${bottleCode}`) {
//       if (location.pathname === "/yzZI3Z") {
//         navigate('/');
//       }
//     }
//     if (qrCode === `/${canCode}`) {
//       if (location.pathname === "/5TJ7qu") {
//         navigate('/');
//       }
//     }
//   }, [qrCode, navigate]);

//   return (
//     <Suspense fallback={<LoaderPage/>}>
//       <Routes>
//         <Route element={<LayoutRoute />} path='/'>
//           <Route element={<LandingPage />} path='/' />
//           <Route element={<AnimationBottle />} path='/animation' />
//           <Route element={<FormPage />} path='/form' />
//           <Route element={<Spinner />} path='/spin' />
//           <Route element={<WinningPage />} path='/winner' />
//           <Route element={<JazzCash />} path='/jazzcash' />
//           <Route element={<CongratulationPage />} path='/congrats' />
//           <Route element={<TransactionFailedPage />} path='/transactionfailed' />
//           <Route element={<HealthPage />} path='/health' />
//           <Route element={<NotFoundPage />} path='*' />
//         </Route>
//       </Routes>
//     </Suspense>
//   );
// };

// export default Routing;


import { useEffect, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { canCode, bottleCode } from '../constant/Codes';
import { useSelector } from "react-redux";
import LayoutRoute from './LayoutRoute';
import LoaderPage from '../reusableComponents/Loader/Loader';

// Lazy load LandingPage
const LandingPage = lazy(() => import('../pages/LandingPage/LandingPage'));

// Direct import other components
import FormPage from '../pages/Form/FormPage';
import Spinner from '../pages/Spinner/Spinner';
import WinningPage from '../pages/WinningPage/WinningPage';
import JazzCash from '../pages/JazzCash/JazzCash';
import CongratulationPage from '../pages/CongratulationPage/CongratulationPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import TransactionFailedPage from '../pages/TransactionFailedPage/TransactionFailedPage';
import AnimationBottle from '../pages/AnimationBottle/AnimationBottle';
import HealthPage from '../pages/HealthPage/HealthPage';

const Routing = () => {
  const navigate = useNavigate();
  const qrCode = useSelector(state => state?.qrCode?.qrCodeNumber);

  useEffect(() => {
    if (qrCode === `/${bottleCode}`) {
      if (location.pathname === "/yzZI3Z") {
        navigate('/');
      }
    }
    if (qrCode === `/${canCode}`) {
      if (location.pathname === "/5TJ7qu") {
        navigate('/');
      }
    }
  }, [qrCode, navigate]);

  return (
    <Suspense fallback={<LoaderPage/>}>
      <Routes>
        <Route element={<LayoutRoute />} path='/'>
          <Route element={<LandingPage />} path='/' />
          <Route element={<AnimationBottle />} path='/animation' />
          <Route element={<FormPage />} path='/form' />
          <Route element={<Spinner />} path='/spin' />
          <Route element={<WinningPage />} path='/winner' />
          <Route element={<JazzCash />} path='/jazzcash' />
          <Route element={<CongratulationPage />} path='/congrats' />
          <Route element={<TransactionFailedPage />} path='/transactionfailed' />
          <Route element={<HealthPage />} path='/health' />
          <Route element={<NotFoundPage />} path='*' />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Routing;





// import React,{useEffect} from 'react';
// import { Route, Routes } from 'react-router-dom';
// import LandingPage from '../pages/LandingPage/LandingPage';
// import FormPage from '../pages/Form/FormPage';
// import Spinner from '../pages/Spinner/Spinner';
// import WinningPage from '../pages/WinningPage/WinningPage';
// import JazzCash from '../pages/JazzCash/JazzCash';
// import CongratulationPage from '../pages/CongratulationPage/CongratulationPage';
// import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
// import TransactionFailedPage from '../pages/TransactionFailedPage/TransactionFailedPage';
// import LayoutRoute from './LayoutRoute';
// import { useNavigate } from 'react-router-dom';
// import { canCode, bottleCode } from '../constant/Codes';
// import { useSelector } from "react-redux";
// import AnimationBottle from '../pages/AnimationBottle/AnimationBottle';
// import HealthPage from '../pages/HealthPage/HealthPage';
// const Routing = () => {
//   const navigate = useNavigate();
//   const qrCode = useSelector(state => state?.qrCode?.qrCodeNumber);

//   useEffect(() => {
//         if (qrCode === `/${bottleCode}`) {
//           if(location.pathname === "/yzZI3Z"){
//             navigate('/');
//           }
//         }
//         if (qrCode === `/${canCode}`) {
//           if(location.pathname === "/5TJ7qu"){
//             navigate('/');
//           }
//         }
//       }, [qrCode, navigate]);

//   return (
//       <Routes>
//         <Route element={<LayoutRoute />} path='/'>
//           <Route element={<LandingPage />} path='/' />
//           <Route element={<AnimationBottle />} path='/animation' />
//           <Route element={<FormPage />} path='/form' />
//           <Route element={<Spinner />} path='/spin' />
//           <Route element={<WinningPage />} path='/winner' />
//           <Route element={<JazzCash />} path='/jazzcash' />
//           <Route element={<CongratulationPage />} path='/congrats' />
//           <Route element={<TransactionFailedPage />} path='/transactionfailed' />
//           <Route element={<HealthPage />} path='/health' />
//           <Route element={<NotFoundPage />} path='*' />
//         </Route>
//       </Routes>
//   );
// };

// export default Routing;

