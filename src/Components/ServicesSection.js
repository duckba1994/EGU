import React from 'react';
import serverIcon from '../../src/assets/data-center.png'; // 1. Import รูปเข้ามา
import CCTVIcon from '../../src/assets/cctv.png'; // 1. Import รูปเข้ามา
import lanIcon from '../../src/assets/lan.png'; // 1. Import รูปเข้ามา
import codingIcon from '../../src/assets/coding.png'; // 1. Import รูปเข้ามา
import supportIcon from '../../src/assets/customer-service.png'; // 1. Import รูปเข้ามา





// นี่คือ SVG Icon ตัวอย่างนะครับ เราสามารถเปลี่ยนได้ในอนาคต
const HardwareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);

const HardwareServerIcon = () => (
    <img src={serverIcon} alt="Server Icon" className="h-12 w-12 mx-auto" />

);
const HardwareCCTVIcon = () => (
    <img src={CCTVIcon} alt="Server Icon" className="h-12 w-12 mx-auto" />

);
const HardwareLanIcon = () => (
    <img src={lanIcon} alt="Server Icon" className="h-12 w-12 mx-auto" />

);

const SoftwareCodingIcon = () => (
    <img src={codingIcon} alt="Server Icon" className="h-12 w-12 mx-auto" />

);
const SoftwareSupportIcon = () => (
    <img src={supportIcon} alt="Server Icon" className="h-12 w-12 mx-auto" />

);

const SoftwareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
  </svg>
);

// Component สำหรับการ์ดแต่ละใบ
const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col text-center transform hover:-translate-y-2 transition-transform duration-300">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-2 h-16 flex items-center justify-center">{title}</h3>
    <p className="text-gray-600 flex-grow">{description}</p>
    <a href="#" className="mt-6 text-blue-600 hover:text-blue-800 font-semibold">
      เรียนรู้เพิ่มเติม →
    </a>
  </div>
);

const ServicesSection = () => {
  // --- คุณสามารถแก้ไขข้อมูลบริการได้ตรงนี้ ---
  const hardwareServices = [
    {
      icon: <HardwareServerIcon />,
      title: 'ติดตั้ง Server & Data Center',
      description: 'บริการให้คำปรึกษา ออกแบบ และติดตั้งระบบเซิร์ฟเวอร์สำหรับองค์กรทุกขนาด',
    },
    {
      icon: <HardwareCCTVIcon />,
      title: 'ระบบกล้องวงจรปิด (CCTV)',
      description: 'ติดตั้งระบบกล้องวงจรปิดเพื่อความปลอดภัย ทั้งภายในและภายนอกอาคาร',
    },
    {
      icon: <HardwareLanIcon />,
      title: 'วางระบบสาย LAN & Network',
      description: 'บริการเดินสาย LAN, Fiber Optic และติดตั้งระบบเครือข่ายไร้สาย (Wi-Fi)',
    },
  ];

  const softwareServices = [
    {
      icon: <SoftwareCodingIcon />,
      title: 'โปรแกรมสำเร็จรูป',
      description: 'จำหน่ายและติดตั้งโปรแกรมสำเร็จรูปพร้อมใช้งานสำหรับธุรกิจประเภทต่างๆ',
    },
    {
      icon: <SoftwareSupportIcon />,
      title: 'IT Support & Maintenance',
      description: 'บริการดูแลรักษาระบบคอมพิวเตอร์และเครือข่ายรายเดือน/รายปี (MA)',
    },
  ];
  // --- สิ้นสุดส่วนแก้ไขข้อมูล ---

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">ผลิตภัณฑ์และบริการของเรา</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          เรามีบริการครบวงจรทั้งด้าน Hardware และ Software เพื่อตอบสนองทุกความต้องการทางธุรกิจของคุณ
        </p>

        {/* Hardware Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-700 mb-8">Hardware & Infrastructure</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hardwareServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>

        {/* Software Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-700 mb-8">Software & Managed Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {softwareServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;