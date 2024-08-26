
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const useGTM = () => {
  const location = useLocation();
  const qrCode = useSelector((state) => state?.qrCode?.qrCodeNumber);
console.log(qrCode,"qrCode");
// /5TJ7qu
// /yzZI3Z
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 
      event: "pageview",
      page: location.pathname === "/5TJ7qu" ? "Can" : location.pathname === "/yzZI3Z" ? "Bottle" : location.pathname, 
    });
  }, [location]);
};

export default useGTM;
