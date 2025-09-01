import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">NGU NETWORK</h3>
            <p className="text-gray-400">
              Empowering Businesses Through Technology.
              เราให้บริการด้านระบบเครือข่ายและ IT ครบวงจร
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">ลิงก์ด่วน</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white">บริการของเรา</a></li>
              <li><a href="#portfolio" className="hover:text-white">ผลงาน</a></li>
              <li><a href="#news" className="hover:text-white">ข่าวสาร</a></li>
              <li><a href="#" className="hover:text-white">เกี่ยวกับเรา</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">ติดต่อ</h4>
            <ul className="space-y-2 text-gray-400">
              <li>อีเมล: contact@ngunetwork.com</li>
              <li>โทร: 08X-XXX-XXXX</li>
              <li>ที่อยู่: สมุทรปราการ, ประเทศไทย</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-lg mb-4">ติดตามเรา</h4>
            <div className="flex space-x-4">
              {/* Replace # with your actual social media links */}
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              {/* Add other social icons here e.g., Twitter, LinkedIn */}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} NGU NETWORK SYSTEM. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;