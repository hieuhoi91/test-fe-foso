'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  RiDiscountPercentFill,
  RiHandCoinFill,
  RiRefreshFill,
} from 'react-icons/ri';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaMobile } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import { HiOutlineCamera } from 'react-icons/hi';
import { MdLocalShipping, MdShoppingBag } from 'react-icons/md';
import { FaCircleUser } from 'react-icons/fa6';
import { GoClockFill } from 'react-icons/go';
import { useCartStore } from '@/store/cartStore';
import CategoryMenu from '@/components/CategoryMenu';

const navItems = [
  {
    label: 'Về chúng tôi',
    href: '/about',
  },
  {
    label: 'Bài viết',
    href: '/blog',
  },
  {
    label: 'Catalog',
    href: '/catalog',
  },
  {
    label: 'Liên hệ',
    href: '/contact',
  },
];

const serviceItems = [
  {
    icon: <GoClockFill />,
    label: 'Hỗ trợ 24/7',
    href: '/support',
  },
  {
    icon: <RiHandCoinFill />,
    label: 'Miễn phí vận chuyển',
    href: '/free-shipping',
  },
  {
    icon: <MdLocalShipping />,
    label: 'Giao hàng nhanh 2h',
    href: '/fast-delivery',
  },
  {
    icon: <RiRefreshFill />,
    label: '30 ngày đổi trả',
    href: '/30-day-return',
  },
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const totalItems = useCartStore((state) => state.getTotalItems());

  return (
    <header className="w-full flex flex-col gap-6 pb-6 bg-white">
      <div className="bg-blue-600">
        <div className="container mx-auto text-white py-2 h-6 flex justify-between items-center">
          <div className="flex items-center gap-1 text-xs">
            <RiDiscountPercentFill />
            <span>Nhập mã</span>
            <span className="text-amber-300 font-bold">NEWBIE</span>
            <span>giảm ngay 10% cho lần đầu mua hàng.</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs">
              <BsTelephoneFill />
              <span>Hotline:</span>
              <a href="tel:0283760760" className="font-bold text-amber-300">
                0283 760 760
              </a>
            </div>
            <button className="text-white p-0 hover:text-white text-xs cursor-pointer flex items-center gap-1">
              <FaMobile />
              <span>Tải ứng dụng</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto h-[111px]">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="flex-shrink-0 w-[250px] h-full">
            <Image
              src="/logo.png"
              alt="Sunfil Logo"
              width={250}
              height={111}
              className="w-full h-full object-contain"
            />
          </Link>

          <div className="flex-1 mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm sản phẩm"
                className="w-full h-16 pl-4 pr-[136px] rounded-full border-2 border-blue-600"
              />

              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-4">
                <HiOutlineCamera className="text-black text-3xl" />
                <div className="h-[48px] w-[76px] rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center">
                  <CiSearch className="text-white text-3xl" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
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
            </div>

            <div className="flex items-center gap-2">
              <div className="relative">
                <MdShoppingBag className="text-3xl text-blue-600" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                  {totalItems}
                </span>
              </div>
              <span className="block text-sm">Giỏ hàng</span>
            </div>

            <div className="flex items-center gap-2">
              <FaCircleUser className="text-3xl text-blue-600" />
              <span className="block text-sm">Tài khoản</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-between items-center h-[50px]">
        <div className="flex items-center justify-between h-full gap-6">
          <CategoryMenu
            showMenu={showMenu}
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
          />

          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link href={item.href} key={item.href} className="font-normal">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            {serviceItems.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className="font-medium flex items-center gap-2"
              >
                <span className="text-blue-600 text-2xl">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
