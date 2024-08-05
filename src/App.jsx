import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Routing from "./routes/Routing";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { qrCodeFunction } from "./redux/slice/QrCodeSlice";
import { useSelector, useDispatch } from "react-redux";
import "animate.css";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const qrCode = useSelector((state) => state?.qrCode?.qrCodeNumber);
  const error = useSelector((state) => state?.error);
  useEffect(() => {
    if (
      (qrCode === "" && "/5TJ7qu" === location.pathname) ||
      "/yzZI3Z" === location.pathname
    ) {
      dispatch(qrCodeFunction(location.pathname));
    }
    if ("/5TJ7qu" === location.pathname) {
      dispatch(qrCodeFunction(location.pathname));
    }
    if ("/yzZI3Z" === location.pathname) {
      dispatch(qrCodeFunction(location.pathname));
    }
  }, []);

  useEffect(() => {
    const disableContextMenu = (e) => e.preventDefault();
    const disableKeys = (e) => {
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && e.keyCode === "I".charCodeAt(0)) ||
        (e.ctrlKey && e.shiftKey && e.keyCode === "C".charCodeAt(0)) ||
        (e.ctrlKey && e.shiftKey && e.keyCode === "J".charCodeAt(0)) ||
        (e.ctrlKey && e.keyCode === "U".charCodeAt(0))
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", disableContextMenu);
    document.addEventListener("keydown", disableKeys);

    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
      document.removeEventListener("keydown", disableKeys);
    };
  }, []);

  const setFullHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  useEffect(() => {
    setFullHeight();
    window.addEventListener("resize", setFullHeight);
    return () => window.removeEventListener("resize", setFullHeight);
  }, []);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <div className="main_container">
      <Routing />
    </div>
  );
};

export default App;
