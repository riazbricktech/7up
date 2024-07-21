// import React, { useEffect, useRef } from 'react';
// import { useLocation } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';

// const VerticalSwiper = ({ children }) => {
//   const location = useLocation();
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.update();
//     }
//   }, [location]);

//   return (
//     <Swiper
//       ref={swiperRef}
//       direction="vertical"
//       navigation
//       modules={[Navigation]}
//     >
//       {React.Children.map(children, (child, index) => (
//         <SwiperSlide key={index}>{child}</SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default VerticalSwiper;
