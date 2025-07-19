'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
} from 'react-icons/md';
import { BsList } from 'react-icons/bs';
import { categories } from '@/data/data';
import ProductCard from '@/components/ProductCard';

interface CategoryMenuProps {
  showMenu: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const CategoryMenu: React.FC<CategoryMenuProps> = ({
  showMenu,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div
      className="relative h-full"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button className="bg-blue-600 text-white h-full px-4 py-2 rounded-md flex items-center gap-2">
        <BsList className="text-white text-2xl" />
        <span>Danh mục sản phẩm</span>
        {showMenu ? (
          <MdKeyboardArrowUp className="text-white text-2xl ml-2" />
        ) : (
          <MdKeyboardArrowDown className="text-white text-2xl ml-2" />
        )}
      </button>

      {showMenu && (
        <div className="absolute top-full left-0 flex">
          <div className="w-[280px] bg-white rounded-l-lg shadow-lg py-1 z-50">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`relative h-16 hover:bg-gray-50 ${
                  activeCategory.id === category.id
                    ? 'bg-gray-50 border-l-2 border-blue-700'
                    : ''
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
                  <span
                    className={`text-sm flex-1 font-medium ${
                      activeCategory.id === category.id ? 'text-blue-700' : ''
                    }`}
                  >
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
                            className="group bg-gray-100 p-2 rounded-lg"
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
  );
};

export default CategoryMenu;
