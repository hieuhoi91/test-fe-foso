'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md';

const sitemap = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Article',
    href: '/article',
  },
  {
    label: 'Cart',
    href: '/cart',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

const legal = [
  {
    label: 'Privacy Policy',
    href: '/privacy-policy',
  },
  {
    label: 'Cookie Policy',
    href: '/cookie-policy',
  },
  {
    label: 'Delivery Policy',
    href: '/delivery-policy',
  },
];
const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="pt-12 h-[464px] flex items-center justify-center pb-8 border-t bg-[url(/bg-footer.jpg)] bg-no-repeat bg-center bg-cover">
      <div className="container mx-auto">
        <div className="flex gap-32">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-8 text-[#0A2472]">
              VIET HUNG AUTO PRODUCTION TRADING JOINT STOCK COMPANY
            </h3>
            <div className="space-y-2 text-gray-600">
              <div>
                <span>Tax code: </span>
                <span className="font-bold">0305094228</span>
              </div>
              <div>
                <span>Address: </span>
                <span className="font-bold">
                  13 Nghia Thuc, Ward 05, District 5, Ho Chi Minh City, Viet
                  Nam.
                </span>
              </div>
              <div>
                <span>Phone number: </span>
                <span className="font-bold">0283 760 7607</span>
              </div>
              <div>
                <span>Opening hour: </span>
                <span className="font-bold">09:00 - 22:00 from Mon - Fri</span>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4 w-[200px] h-auto">
              <Image
                src="/certification.png"
                alt="Certification"
                width={200}
                height={200}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="">
            <h3 className="text-2xl font-semibold mb-8 text-[#0A2472]">
              Sitemap
            </h3>
            <ul className="space-y-2">
              {sitemap.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-[#0A2472]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <h3 className="text-2xl font-semibold mb-8 text-[#0A2472]">
              Legal
            </h3>
            <ul className="space-y-2">
              <li className="font-bold">__ Privacy policy</li>
              {legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-[#0A2472]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="ml-16">
            <h3 className="text-2xl font-semibold mb-4 text-[#0A2472]">
              Download App
            </h3>
            <div className="space-y-4">
              <Link
                href="https://play.google.com/store"
                target="_blank"
                className="flex items-center w-[230px] h-[64px] justify-center bg-black text-white p-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Image
                  src="/google-play.png"
                  alt="Get it on Google Play"
                  width={32}
                  height={32}
                  className="mr-3"
                />
                <div className="flex flex-col">
                  <span className="text-sm">Get It On</span>
                  <span className="text-lg font-semibold">
                    Google Play Store
                  </span>
                </div>
              </Link>

              <Link
                href="https://apps.apple.com"
                target="_blank"
                className="flex items-center w-[230px] h-[64px] justify-center bg-blue-600 text-white p-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Image
                  src="/apple-logo.png"
                  alt="Download on App Store"
                  width={32}
                  height={32}
                  className="mr-3"
                />
                <div className="flex flex-col">
                  <span className="text-sm">Download from</span>
                  <span className="text-lg font-semibold">Apple App Store</span>
                </div>
              </Link>
              <div className="flex items-center justify-end gap-2">
                <div className="w-[32px] h-[32px] rounded-full overflow-hidden">
                  <Image
                    src="/vi-flag.png"
                    alt="Vietnamese"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span>VI</span>
                <MdOutlineKeyboardArrowDown className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className={`fixed right-8 bottom-8 border border-[#0A2472] text-white p-3 cursor-pointer rounded-full shadow-lg transition-opacity duration-300 hover:bg-[#083AAA] group ${
          showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <MdOutlineKeyboardArrowUp className="text-[#0A2472] group-hover:text-white text-xl" />
      </button>
    </footer>
  );
};

export default Footer;
