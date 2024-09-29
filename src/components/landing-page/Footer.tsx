import { Linkedin, Mail, Twitter } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between text-gray-700">
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <h3 className="text-lg font-semibold text-[#004AAD] mb-2">Contact Information</h3>
            <div className="mb-2">
              <img
                className="inline-block h-10 w-10 rounded-full"
                src="https://media.licdn.com/dms/image/v2/D4E03AQES9V89jYTAeQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722245560797?e=1732752000&v=beta&t=J68Slfh2FjBdgB3YVg_DMDET7H6XGQ6I5spJlwEgMN4"
                alt="Danial Alias"
              />
              <p className="inline-block ml-2">Danial Alias</p>
              <div className="flex items-center justify-center lg:justify-start">
                <Mail className="text-[#004AAD] mr-2" size={16} />
                <a href="mailto:danial@hadicreative.com" className="hover:underline">
                  danial@hadicreative.com
                </a>
              </div>
            </div>
            <div className="mt-6">
              <img
                className="inline-block h-10 w-10 rounded-full"
                src="https://media.licdn.com/dms/image/v2/D4D03AQEtqNyIDpCpXg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715590727232?e=1732752000&v=beta&t=ncRQxZ25D6CKA2E0__rh8zt1x8NA7nByzTd_XjnSb7E"
                alt="Bashir Sani"
              />
              <p className="inline-block ml-2">Bashir Sani</p>
              <div className="flex items-center justify-center lg:justify-start">
                <Mail className="text-[#004AAD] mr-2" size={16} />
                <a href="mailto:bashirsani.dev@gmail.com" className="hover:underline">
                  bashirsani.dev@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-right mb-8 lg:mb-0">
            <h3 className="text-lg font-semibold text-[#004AAD] mb-2">Follow Us</h3>
            <div className="flex justify-center lg:justify-end space-x-4">
              <a href="https://linkedin.com" className="text-[#000b19] hover:text-[#002E8A]" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="https://twitter.com" className="text-[#000b19] hover:text-[#002E8A]" aria-label="Twitter">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p>&copy; 2024 EduScope. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
