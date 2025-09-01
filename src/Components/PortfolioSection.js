import React from 'react';

// --- คุณสามารถแก้ไขข้อมูลโปรเจกต์ได้ตรงนี้ ---
const projects = [
  {
    image: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2070&auto=format&fit=crop',
    category: 'Data Center',
    title: 'วางระบบเซิร์ฟเวอร์สำหรับองค์กร',
    description: 'ติดตั้งและตั้งค่าระบบเซิร์ฟเวอร์ใหม่ทั้งหมดเพื่อเพิ่มประสิทธิภาพและความปลอดภัย',
  },
  {
    image: 'https://images.unsplash.com/photo-1558992222-132d1e483570?q=80&w=1943&auto=format&fit=crop',
    category: 'Network Infrastructure',
    title: 'เดินสาย LAN สำหรับออฟฟิศใหม่',
    description: 'วางระบบเครือข่ายสาย LAN และ Wi-Fi ครอบคลุมทั่วทั้งอาคารสำนักงาน',
  },
  {
    image: 'https://images.unsplash.com/photo-1617833404287-3ab4b58e7276?q=80&w=2070&auto=format&fit=crop',
    category: 'Security System',
    title: 'ติดตั้งระบบ CCTV รอบโรงงาน',
    description: 'ติดตั้งกล้องวงจรปิดความละเอียดสูงพร้อมระบบบันทึกข้อมูลตลอด 24 ชั่วโมง',
  },
];
// --- สิ้นสุดส่วนแก้ไขข้อมูล ---

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            ผลงานของเรา
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            นี่คือตัวอย่างโปรเจกต์ที่เราภาคภูมิใจและได้รับความไว้วางใจจากลูกค้า
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-60 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-bold">{project.title}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-blue-600 font-semibold mb-1">{project.category}</p>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;