'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  RiDiscountPercentFill,
  RiHandCoinFill,
  RiRefreshFill,
} from 'react-icons/ri';
import { BsList, BsTelephoneFill } from 'react-icons/bs';
import { FaMobile } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import { HiOutlineCamera } from 'react-icons/hi';
import {
  MdKeyboardArrowDown,
  MdLocalShipping,
  MdShoppingBag,
  MdKeyboardArrowRight,
} from 'react-icons/md';
import { FaCircleUser } from 'react-icons/fa6';
import { GoClockFill } from 'react-icons/go';
import { categories } from '@/data/data';
import ProductCard from '@/components/ProductCard';
import { useCartStore } from '@/store/cartStore';

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
  const [activeCategory, setActiveCategory] = useState(categories[0]);
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
          <div
            className="relative h-full"
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
          >
            <button className="bg-blue-600 text-white h-full px-4 py-2 rounded-md flex items-center gap-2">
              <BsList className="text-white text-2xl" />
              <span>Danh mục sản phẩm</span>
              <MdKeyboardArrowDown className="text-white text-2xl ml-2" />
            </button>

            {showMenu && (
              <div className="absolute top-full left-0 flex">
                <div className="w-[280px] bg-white rounded-l-lg shadow-lg py-1 z-50">
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      className={`relative h-16 hover:bg-gray-50 ${
                        activeCategory.id === category.id ? 'bg-gray-50' : ''
                      }`}
                      onMouseEnter={() => setActiveCategory(category)}
                    >
                      <Link
                        href={`/category/${category.id}`}
                        className="h-full flex items-center gap-3 px-4"
                      >
                        {category.icon && (
                          <div className="w-6 h-6 flex-shrink-0">
                            <Image
                              src={category.icon}
                              alt={category.name}
                              width={24}
                              height={24}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        )}
                        <span className="text-gray-700 text-sm flex-1">
                          {category.name}
                        </span>
                        <MdKeyboardArrowRight className="text-gray-400" />
                      </Link>
                    </div>
                  ))}
                </div>

                {activeCategory.subcategories && (
                  <div className="h-[570px] w-[870px] bg-white shadow-lg rounded-r-lg p-6">
                    <div className="h-full flex flex-col gap-6">
                      <div className="grid grid-cols-3 gap-4">
                        {activeCategory.subcategories.map((sub) => (
                          <Link
                            key={sub.id}
                            href={`/category/${activeCategory.id}/${sub.id}`}
                            className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 group"
                          >
                            {sub.image && (
                              <div className="w-12 h-12 flex-shrink-0">
                                <Image
                                  src={sub.image}
                                  alt={sub.name}
                                  width={48}
                                  height={48}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                            )}
                            <span className="font-medium text-gray-700 group-hover:text-blue-600">
                              {sub.name}
                            </span>
                          </Link>
                        ))}
                      </div>

                      {activeCategory.bestSellers &&
                        activeCategory.bestSellers.length > 0 && (
                          <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium text-gray-900">
                                Bán chạy nhất
                              </h3>
                              <Link
                                href={`/category/${activeCategory.id}/best-sellers`}
                                className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
                              >
                                Xem tất cả
                                <MdKeyboardArrowRight className="text-xl" />
                              </Link>
                            </div>

                            <div className="grid grid-cols-5 gap-4">
                              {activeCategory.bestSellers.map((product) => (
                                <Link
                                  key={product.id}
                                  href={`/product/${product.id}`}
                                  className="group bg-gray-100 p-2  rounded-lg"
                                >
                                  <ProductCard
                                    product={product}
                                    showButton={false}
                                    showBadge={false}
                                  />
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

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
