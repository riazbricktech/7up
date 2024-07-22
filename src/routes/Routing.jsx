import React,{useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';
import FormPage from '../pages/Form/FormPage';
import Spinner from '../pages/Spinner/Spinner';
import WinningPage from '../pages/WinningPage/WinningPage';
import JazzCash from '../pages/JazzCash/JazzCash';
// import LossPage from '../pages/LossPage/LossPage';
import CongratulationPage from '../pages/CongratulationPage/CongratulationPage';
// import UsedCap from '../pages/UsedCap/UsedCap';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import TransactionFailedPage from '../pages/TransactionFailedPage/TransactionFailedPage';
import LayoutRoute from './LayoutRoute';
import { useNavigate } from 'react-router-dom';
import { canCode, bottleCode } from '../constant/Codes';
import { useSelector } from "react-redux";
import AnimationBottle from '../pages/AnimationBottle/AnimationBottle';
// import VerticalSwiper from './VerticalSwiper'; 
const Routing = () => {
  const navigate = useNavigate();
  const qrCode = useSelector(state => state?.qrCode?.qrCodeNumber);

  useEffect(() => {
        if (qrCode === `/${bottleCode}`) {
          if(location.pathname === "/yzZI3Z"){
            navigate('/');
          }
        }
        if (qrCode === `/${canCode}`) {
          if(location.pathname === "/5TJ7qu"){
            navigate('/');
          }
        }
      }, [qrCode, navigate]);

  return (
    // <VerticalSwiper>
      <Routes>
        <Route element={<LayoutRoute />} path='/'>
          <Route element={<LandingPage />} path='/' />
          <Route element={<AnimationBottle />} path='/animation' />
          <Route element={<FormPage />} path='/form' />
          <Route element={<Spinner />} path='/spin' />
          <Route element={<WinningPage />} path='/winner' />
          <Route element={<JazzCash />} path='/jazzcash' />
          {/* <Route element={<LossPage />} path='/loss' /> */}
          <Route element={<CongratulationPage />} path='/congrats' />
          {/* <Route element={<UsedCap />} path='/usedcap' /> */}
          <Route element={<TransactionFailedPage />} path='/transactionfailed' />
          <Route element={<NotFoundPage />} path='*' />
        </Route>
      </Routes>
    // </VerticalSwiper>
  );
};

export default Routing;


// import React, { useEffect, lazy, Suspense,useState } from 'react';
// import { Route, Routes, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { canCode, bottleCode } from '../constant/Codes';
// import LayoutRoute from './LayoutRoute';
// import Loader from '../reusableComponents/Loader/Loader'; 
// const LandingPage = lazy(() => import('../pages/LandingPage/LandingPage'));
// const FormPage = lazy(() => import('../pages/Form/FormPage'));
// const Spinner = lazy(() => import('../pages/Spinner/Spinner'));
// const WinningPage = lazy(() => import('../pages/WinningPage/WinningPage'));
// const NicForm = lazy(() => import('../pages/NicForm/NicForm'));
// const LossPage = lazy(() => import('../pages/LossPage/LossPage'));
// const CongratulationPage = lazy(() => import('../pages/CongratulationPage/CongratulationPage'));
// const UsedCap = lazy(() => import('../pages/UsedCap/UsedCap'));
// const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
// const TransactionFailedPage = lazy(() => import('../pages/TransactionFailedPage/TransactionFailedPage'));
// const AnimationBottle = lazy(() => import('../pages/AnimationBottle/AnimationBottle'));

// const Routing = () => {
//   const navigate = useNavigate();
//   const qrCode = useSelector(state => state?.qrCode?.qrCodeNumber);
//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => {
//     if (qrCode === `/${bottleCode}`) {
//       if(location.pathname === "/yzZI3Z"){
//         navigate('/');
//       }
//     }
//     if (qrCode === `/${canCode}`) {
//       if(location.pathname === "/5TJ7qu"){
//         navigate('/');
//       }
//     }
//   }, [qrCode, navigate]);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 3000); // Adjust the loading duration as needed
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       <Loader isLoading={isLoading} />
//       <Suspense fallback={<Loader isLoading={true} />}>
//         <Routes>
//           <Route element={<LayoutRoute />} path='/'>
//             <Route element={<LandingPage />} path='/' />
//             <Route element={<AnimationBottle />} path='/animation' />
//             <Route element={<FormPage />} path='/form' />
//             <Route element={<Spinner />} path='/spin' />
//             <Route element={<WinningPage />} path='/winner' />
//             <Route element={<NicForm />} path='/cnic' />
//             <Route element={<LossPage />} path='/loss' />
//             <Route element={<CongratulationPage />} path='/congrats' />
//             <Route element={<UsedCap />} path='/usedcap' />
//             <Route element={<TransactionFailedPage />} path='/transactionfailed' />
//             <Route element={<NotFoundPage />} path='*' />
//           </Route>
//         </Routes>
//       </Suspense>
//     </>
//   );
// };

// export default Routing;