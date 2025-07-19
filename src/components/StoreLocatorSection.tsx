'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';

const StoreLocatorSection = () => {
  const pathname = usePathname();
  const hiddenPaths = ['/'];
  if (!hiddenPaths.includes(pathname)) {
    return null;
  }
  return (
    <div className="h-[120px] w-full bg-[#E6F1FF]">
      <div className="container mx-auto flex items-center justify-between h-full">
        <div className="flex items-center gap-4">
          <Image src="/map.png" alt="logo" width={64} height={64} />
          <h1 className="text-3xl font-semibold">
            Xem hệ thống 88 cửa hàng trên toàn quốc
          </h1>
        </div>
        <button className="bg-white transition-all cursor-pointer hover:text-white hover:bg-blue-700 text-blue-700 px-8 font-semibold py-4 text-2xl flex items-center rounded-full gap-2">
          Xem ngay <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default StoreLocatorSection;
