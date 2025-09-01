import React from 'react';

// --- Icon Components ---
const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);
const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            ติดต่อเรา
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            สนใจบริการของเรา? หรือมีคำถาม? ติดต่อเราได้เลย
          </p>
        </div>
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:flex">
          {/* Contact Info */}
          <div className="md:w-1/3 bg-blue-50 p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">ข้อมูลการติดต่อ</h3>
            <ul className="space-y-6 text-gray-700">
              <li className="flex items-start">
                <LocationIcon />
                <span>123 ถนนตัวอย่าง, ตำบลคลองด่าน, อำเภอบางบ่อ, สมุทรปราการ 10550</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon />
                <span>08X-XXX-XXXX</span>
              </li>
              <li className="flex items-center">
                <EmailIcon />
                <span>contact@ngunetwork.com</span>
              </li>
            </ul>
            {/* Placeholder for Map */}
            <div className="mt-8 bg-gray-200 h-48 rounded-lg">
                <p className="text-center text-gray-500 pt-20">Google Maps placeholder</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-2/3 p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">ส่งข้อความถึงเรา</h3>
            <form action="#" method="POST">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">ชื่อ-นามสกุล</label>
                  <input type="text" name="name" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">อีเมล</label>
                  <input type="email" name="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">หัวข้อ</label>
                <input type="text" name="subject" id="subject" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">ข้อความ</label>
                <textarea name="message" id="message" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                  ส่งข้อความ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;