import React from 'react';

// --- เราจะสร้าง Icon Components เล็กๆ ไว้ตรงนี้เพื่อความสะอาดของโค้ด ---

// ไอคอนสำหรับ "บริการครบวงจร"
const ComprehensiveIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V6a1 1 0 011-1h3a1 1 0 001-1V4z" />
  </svg>
);

// ไอคอนสำหรับ "ทีมงานมืออาชีพ"
const ExpertIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20M12 14L9 12.5" />
  </svg>
);

// ไอคอนสำหรับ "บริการหลังการขาย"
const SupportIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

// ไอคอนสำหรับ "ประสบการณ์"
const ExperienceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

// --- สิ้นสุดส่วนของ Icon ---

const WhyUsSection = () => {
  const features = [
    {
      icon: <ComprehensiveIcon />,
      title: 'บริการครบวงจร',
      description: 'ดูแลทั้ง Hardware, Software และการติดตั้ง จบในที่เดียว ไม่ต้องติดต่อหลายเจ้า',
    },
    {
      icon: <ExpertIcon />,
      title: 'ทีมงานมืออาชีพ',
      description: 'ทีมงานของเรามีประสบการณ์และความเชี่ยวชาญสูง พร้อมให้คำปรึกษาที่ดีที่สุด',
    },
    {
      icon: <SupportIcon />,
      title: 'บริการหลังการขาย',
      description: 'มีการรับประกันผลงาน พร้อมแพ็กเกจดูแลรักษารายเดือน/รายปี ให้อุ่นใจ',
    },
    {
      icon: <ExperienceIcon />,
      title: 'ประสบการณ์และความน่าเชื่อถือ',
      description: 'ได้รับความไว้วางใจจากธุรกิจหลากหลาย พร้อมผลงานที่พิสูจน์ได้จริง',
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          ทำไมต้องเลือก NGU?
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          เรามุ่งมั่นที่จะเป็นมากกว่าผู้ให้บริการ แต่เป็นพาร์ทเนอร์ที่ช่วยให้ธุรกิจของคุณเติบโต
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6">
              <div className="bg-blue-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;