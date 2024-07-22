import React ,{useState,useEffect}from 'react';
import './Loader.css'; // Import the CSS file
import LoaderImage from "../../assets/images/new_images/center_logo.webp";
const Loader = ({ isLoading }) => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      if (isLoading) {
        setIsVisible(true);
      } else {
        const timer = setTimeout(() => setIsVisible(false), 1000); // Match the transition duration
        return () => clearTimeout(timer);
      }
    }, [isLoading]);
  
    return (
      isVisible && (
        <div className={`loader-container ${isLoading ? 'fade-in' : 'fade-out'}`}>
          <div className="loader-background"></div>
          <div className="loader">
          <img src={LoaderImage} alt="Loading..."/>
          </div>
        </div>
      )
    );
  };

export default Loader;
