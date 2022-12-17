// import React from 'react'
// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import { ChevronRightIcon } from '@chakra-ui/icons';
// import { Box, Text } from '@chakra-ui/react';
// import './Home.css';

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "flex", alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: "black", width: '30px', height: '30px' }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "flex", alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: "black", width: '30px', height: '30px', }}
//       onClick={onClick}
//     />
//   );
// }

// const Home = () => {
//   const [data, setData] = useState([]);
//   const [frag, setFrag] = useState([]);
//   const [eye, setEye] = useState([]);
//   const [sweats,setSweat]=useState([]);
//   const getData = () => {
//     return axios(`https://sephorajsonserver.onrender.com/new-arrival?_limit=18`).then((res) => setData(res.data));
//   }
//   const getData1 = () => {
//     return axios(`https://sephorajsonserver.onrender.com/new-arrival-fragrance?_limit=18`).then((res) => setFrag(res.data));
//   }
//   const getData2 = () => {
//     return axios(`https://sephorajsonserver.onrender.com/womens-Eye-Brows?_limit=18`).then((res) => setEye(res.data));
//   }

//   const getSweat=()=>{
//     return axios(`https://sephorajsonserver.onrender.com/womens-Jackets?_limit=15`).then((res)=>setSweat(res.data));
//   }

//   useEffect(() => {
//     getData();
//     getData1();
//     getData2();
//     getSweat();
//   }, [])
//   console.log(data);
//   var settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 6,
//     slidesToScroll: 4,
//     initialSlide: 0,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };
//   var setting = {
//     infinite: true,
//     speed: 400,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     initialSlide: 0,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   }
//   var setting3={
//     infinite: true,
//     speed: 400,
//     slidesToShow: 5,
//     slidesToScroll: 4,
//     initialSlide: 0,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]

//   }
//   return (
//     <div>
//       <Box className='HomeTopBanner'>
//         <Box className='top-banner-div'>
//           <img src='https://www.sephora.com/contentimages/2022-12-06-slotting-gifts-by-price-site-rwd-hp-hero-banner-4-product-english-us-handoff_01.jpg?imwidth=544' alt='img 1' />
//           <Box className='top-banner-text-div'>
//             <Text className='top-banner-text-head'>$65 & Under Gifts</Text>
//             <Text className='top-banner-text-p'>Make their holiday with just right presents for all.</Text>
//             <Text className='shop-now-text'>SHOP NOW <ChevronRightIcon /></Text>
//           </Box>
//         </Box>
//         <Box className='top-banner-div'>
//           <img src='https://www.sephora.com/contentimages/2022-12-02-slotting-just-arrived-v4-standard-site-rwd-home-page-hero-banner-US_01-handoff.jpg?imwidth=545' alt='img2' />
//           <Box className='top-banner-text-div1'>
//             <Text className='top-banner-text-head1'>The Latest Lineup</Text>
//             <Text className='top-banner-text-p1'>New Beauty from the hottest brands</Text>
//             <Text className='shop-now-text1'>SHOP NOW <ChevronRightIcon /></Text>
//           </Box>
//         </Box>
//         <Box className='top-banner-div'>
//           <img src='https://www.sephora.com/contentimages/2022-11-29-slotting-gifts-by-price-site-rwd-hp-hero-banner-skincare-musthaves-us-handoff_01.jpg?imwidth=545' alt='img3' />
//           <Box className='top-banner-text-div'>
//             <Text className='top-banner-text-head'>Skincare Must-Have under $50</Text>
//             <Text className='top-banner-text-p'>Picks at just-right prices.</Text>
//             <Text className='shop-now-text'>SHOP NOW <ChevronRightIcon /></Text>
//           </Box>
//         </Box>
//       </Box>
//       <Box className='chosen-container'>
//         <h2>Chosen For You</h2>
//         <div className='slide-container'>
//           <Slider {...settings} >
//             {
//               data.map((item) => (
//                 <div className="carousel" key={item.id}>
//                   <div className='indi-card'>
//                     <img className="cImage" src={item.imagePath} alt="image1" />
//                     <div>
//                       <Text fontWeight="700">{item.brand}</Text>
//                       <Text fontWeight={'600'}>{item.name}</Text>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             }
//           </Slider>
//         </div>
//       </Box>
//       <Box className='chosen-container'>
//         <h2>Just Dropped</h2>
//         <div className='slide-container'>
//           <Slider {...settings} >
//             {
//               frag.map((item) => (
//                 <div className="carousel" key={item.id}>
//                   <div className='indi-card'>
//                     <img className="cImage" src={item.imagePath} alt="image1" />
//                     <div>
//                       <Text fontWeight="700">{item.brand}</Text>
//                       <Text fontWeight={'600'}>{item.name}</Text>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             }
//           </Slider>
//         </div>
//       </Box>
//       <Box className='chosen-container1'>
//         <h2>See Some Eyecare</h2>
//         <div className='slide-container'>
//           <Slider {...setting} >
//             {
//               eye.map((item) => (
//                 <div className="carousel" key={item.id}>
//                   <div className='indi-card-eye'>
//                     <img className="cImage" src={item.imagePath} alt="image1" />
//                     <div>
//                       <Text fontWeight="700">{item.brand}</Text>
//                       <Text fontWeight={'600'}>{item.name}</Text>
//                       <Text fontWeight={'200'} marginTop='5px'>{item.promotions[0].displayName}</Text>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             }
//           </Slider>
//         </div>
//         <hr className='hr'/>
//       </Box>
//       <Box className='perfect'>
//         <div>
//           <Box className='mid-banner-text-div'>
//             <Text className='mid-banner-text-head'>Perfect Presents Under $25</Text>
//             <Text className='mid-banner-text-p'>Everyone will love unwrapping these makup and</Text>
//             <Text className='mid-banner-text-p'> Skincare essentials.</Text>
//             <Text className='shopmid-now-text'>SHOP NOW <ChevronRightIcon /></Text>
//           </Box>
//           <div>
//             <img src='https://www.sephora.com/contentimages/2022-12-1-sc-sku-site-desktop-mweb-home-page-rwd-marketing-banner-launch-1-800x256-en-us-can.jpg?imwidth=400' alt='img1'/>
//           </div>
//         </div>
//         <div>
//         <Box className='mid-banner-text-div2'>
//             <Text className='mid-banner-text-head2'>Get Your Gifts in Time</Text>
//             <Text className='mid-banner-text-p2'>Choose free shipping and order by 6am ET 12/20 to</Text>
//             <Text className='mid-banner-text-p2'>receive by 12/24.</Text>
//             <Text className='shopmid-now-text2'>Learn More <ChevronRightIcon /></Text>
//         </Box>
//           <div>
//             <img src='https://www.sephora.com/contentimages/2022-12-05-holiday-der-b-launch-site-mobile-desktop-home-page-rwd-marketing-banner-ldts-mockup-us-2869-release-800x256.jpg?imwidth=400' alt='img1'/>
//           </div>
//         </div>
//         <div>
//         <Box className='mid-banner-text-div3'>
//             <Text className='mid-banner-text-head2'>Get Your Gifts in Time</Text>
//             <Text className='mid-banner-text-p2'>Choose free shipping and order by 6am ET 12/20 to</Text>
//             <Text className='mid-banner-text-p2'>receive by 12/24.</Text>
//             <Text className='shopmid-now-text2'>Learn More <ChevronRightIcon /></Text>
//         </Box>
//           <div>
//             <img src='https://www.sephora.com/contentimages/2022-holiday-launch-bun-d-site-mobile-desktop-marketing-banner-rwd-live-chat-us-can-800x256.jpg?imwidth=400' alt='img1'/>
//           </div>
//         </div>
//       </Box>
//       <hr className='hr1'/>
//       <Box className='chosen-container'>
//         <h2>Some Sweatshirts for winter</h2>
//         <div className='slide-container'>
//           <Slider {...setting3} >
//             {
//               sweats.map((item) => (
//                 <div className="carousel" key={item.id}>
//                   <div className='indi-card'>
//                     <img className="cImage" src={item.imagePath} alt="image1" />
//                   <div>
//                       <Text fontWeight="700">{item.brand}</Text>
//                       <Text fontWeight={'400'} marginTop='4px'>{item.name}</Text>
//                   </div>
//                   </div>
//                 </div>
//               ))
//             }
//           </Slider>
//         </div>
//       </Box>
//       <hr className='hr1'/>
//     </div>
//   )
// }

// export default Home