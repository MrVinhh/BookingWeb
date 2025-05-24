import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 text-lg">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Section 1: About */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-semibold">
              Về 23st.Homestay
            </h4>
            <p className="text-sm">
              23st.Homestay là một cộng đồng sống hiện đại, tiện nghi và đầy cảm
              hứng, nơi mọi người có thể kết nối và tận hưởng những dịch vụ
              tuyệt vời.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-indigo-400">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-indigo-400">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-indigo-400">
                  Dịch vụ
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-indigo-400">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên hệ</h4>
            <p className="text-sm">
              Địa chỉ: 123 23st.Homestay, Quận 1, TP. HCM
            </p>
            <p className="text-sm">Email: info@mvillage.vn</p>
            <p className="text-sm">SĐT: (028) 1234 5678</p>
          </div>

          {/* Section 4: Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Kết nối với chúng tôi
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-indigo-400"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-indigo-400"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-indigo-400"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-indigo-400"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          <p>&copy; 2025 23st.Homestay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
