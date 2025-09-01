import logo from './logo.svg';
import './App.css';
// import {  Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import T1 from '../src/Components/Layout'
import T2 from '../src/Components/Header'
import T3 from '../src/Components/HeroSection'
import T4 from '../src/Components/ServicesSection'
import T5 from '../src/Components/WhyUsSection'
import T6 from '../src/Components/PortfolioSection'
import T7 from '../src/Components/NewsSection'
import T8 from '../src/Components/ContactSection'
import T9 from '../src/Components/Footer'




function App() {
  return (
<div className="App">
      <T2 />
      <T3></T3>
      <T4></T4>
      <T5></T5>
      <T6></T6>
      <T7>

      </T7>
      <T8></T8>
      <T9></T9>
      

      {/* <T3 />  */}
      {/* 2. เพิ่ม Component เข้าไป */}
      {/* ส่วนอื่นๆ ของเว็บจะมาต่อตรงนี้ */}
    </div>
    // <HeroSection></HeroSection>
    //  <T1 />
    //  <Routes>
    //   <Route path="/" element={<T1  />}>
    //     {/* <Route index element={<T2 />} /> 
    //     <Route path="sales-order" element={<T3 />} /> */}
    //   </Route>
    // </Routes>
  );
}

export default App;
