import React from 'react';

// --- คุณสามารถแก้ไขข้อมูลบทความได้ตรงนี้ ---
const articles = [
  {
    image: 'https://images.unsplash.com/photo-1526374965328-5f61d4dc16c6?q=80&w=2070&auto=format&fit=crop',
    category: 'Cybersecurity',
    date: 'August 15, 2025',
    title: '5 วิธีง่ายๆ ในการป้องกัน Ransomware สำหรับธุรกิจ SME',
    excerpt: 'เรียนรู้วิธีป้องกันข้อมูลสำคัญของบริษัทคุณให้ปลอดภัยจากภัยคุกคามทางไซเบอร์ที่นับวันจะยิ่งอันตรายมากขึ้น',
  },
  {
    image: 'https://images.unsplash.com/photo-1614036750232-a275a9a4b3c7?q=80&w=1974&auto=format&fit=crop',
    category: 'Technology',
    date: 'August 22, 2025',
    title: 'Wi-Fi 7 คืออะไร และจะเข้ามาเปลี่ยนโลกการเชื่อมต่ออย่างไร?',
    excerpt: 'ทำความรู้จักกับมาตรฐาน Wi-Fi ใหม่ล่าสุด ที่จะมอบความเร็วสูงและความเสถียรที่เหนือกว่าที่เคยมีมา',
  },
  {
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1934&auto=format&fit=crop',
    category: 'IT Tips',
    date: 'September 01, 2025',
    title: 'เทคนิคการเลือก Server ให้เหมาะกับขนาดองค์กรของคุณ',
    excerpt: 'คู่มือสำหรับผู้บริหารในการตัดสินใจเลือกซื้อหรือเช่าเซิร์ฟเวอร์ให้คุ้มค่าและเหมาะสมกับการใช้งานที่สุด',
  },
];
// --- สิ้นสุดส่วนแก้ไขข้อมูล ---

const NewsSection = () => {
  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            ข่าวสารและบทความ
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            อัปเดตความรู้และติดตามข่าวสารล่าสุดในแวดวง IT กับเรา
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden flex flex-col group">
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity" />
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                  <span className="font-semibold text-blue-600">{article.category}</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 flex-grow">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                <a href="#" className="mt-auto text-blue-600 hover:text-blue-800 font-semibold self-start">
                  อ่านต่อ...
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;