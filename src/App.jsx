import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Routing from './routes/Routing';
import { useLocation } from 'react-router-dom';
import { useEffect,useLayoutEffect } from 'react';
import { qrCodeFunction } from './redux/slice/QrCodeSlice';
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const qrCode = useSelector(state => state?.qrCode?.qrCodeNumber);
  
  useEffect(() => {
    if (qrCode === "" && "/5TJ7qu" === location.pathname || "/yzZI3Z" === location.pathname) {
      dispatch(qrCodeFunction(location.pathname));
    }
    if ("/5TJ7qu" === location.pathname) {
      dispatch(qrCodeFunction(location.pathname));
    }
    if ("/yzZI3Z" === location.pathname) {
      dispatch(qrCodeFunction(location.pathname));
    }
  },[]);

  const setFullHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    setFullHeight();
    window.addEventListener('resize', setFullHeight);
    return () => window.removeEventListener('resize', setFullHeight);
  }, []);

  
  // }, [qrCode, dispatch, location.pathname]);

  
  // when tab Close, Remove data from localStorage

  // useEffect(() => {
  //   // Function to set flag before the tab is unloaded
  //   const handleBeforeUnload = () => {
  //     sessionStorage.setItem('shouldClearLocalStorage', 'true');
  //   };
  
  //   // Function to clear localStorage based on flag
  //   const clearLocalStorage = () => {
  //     if (sessionStorage.getItem('shouldClearLocalStorage')) {
  //       localStorage.clear();
  //       sessionStorage.removeItem('shouldClearLocalStorage');
  //     }
  //   };
  
  //   // Add event listeners
  //   window.addEventListener('beforeunload', handleBeforeUnload);
  //   window.addEventListener('load', clearLocalStorage);
  
  //   // Clean up event listeners
  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //     window.removeEventListener('load', clearLocalStorage);
  //   };
  // }, []);
  
  
  
  



  return (
    <div className='main_container'>
      <Routing />
    </div>
  );
}

export default App;
