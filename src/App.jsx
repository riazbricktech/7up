import NumberInput from './components/NumberInput';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
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

  
  // }, [qrCode, dispatch, location.pathname]);

  
  // when tab Close, Remove data from localStorage
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.clear();
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);



  return (
    <div className='main_container'>
      <Routing />
      {/* <NumberInput/> */}
    </div>
  );
}

export default App;
