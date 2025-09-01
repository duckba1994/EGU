import React from 'react';

// คุณสามารถเปลี่ยน URL ของรูปภาพนี้เป็นรูปที่คุณต้องการได้
// แนะนำให้ใช้รูปภาพที่มีขนาดประมาณ 1920x1080 pixels เพื่อความคมชัด
import heroImageUrl from '../assets/BG.png'; // ปรับแก้ path ให้ถูกต้อง

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${heroImageUrl})`,
        height: 'calc(100vh - 4rem)', // ให้ความสูงเกือบเต็มหน้าจอ (100vh) ลบด้วยความสูงของ Navbar (4rem = 64px)
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          NGU NETWORK SYSTEM
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl">
          พลังแห่งเครือข่ายยุคใหม่ เพื่อขับเคลื่อนธุรกิจของคุณ
        </p>
        <a
          href="#services" // ลิงก์นี้ควรจะชี้ไปที่ ID ของส่วน "บริการ" ในอนาคต
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          ดูบริการของเรา
        </a>
      </div>
    </div>
  );
};

export default HeroSection;