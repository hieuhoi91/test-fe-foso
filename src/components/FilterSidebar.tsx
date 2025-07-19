import { brands, categories, origins, priceRanges, years } from '@/data/data';
import Image from 'next/image';
import { useState } from 'react';

type SectionKey = 'categories' | 'price' | 'brand' | 'year' | 'origin';

export default function FilterSidebar() {
  const [openSections, setOpenSections] = useState({
    categories: true,
    price: true,
    brand: true,
    year: true,
    origin: true,
  });
  const [selectedPriceRange, setSelectedPriceRange] = useState<number | null>(
    null
  );

  const toggleSection = (section: SectionKey) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="w-80 flex-shrink-0">
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center gap-2 mb-4">
          <Image
            src="/filter.png"
            alt="filter"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <h2 className="font-bold text-2xl text-blue-700">Bộ Lọc</h2>
        </div>

        <div className="space-y-4">
          <div className="relative border-t border-gray-200 pt-4">
            <button
              onClick={() => toggleSection('categories')}
              className="w-full flex items-center cursor-pointer justify-between font-medium hover:text-blue-600 transition-colors"
            >
              <h3 className="text-lg">Danh mục sản phẩm</h3>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ease-in-out ${
                  openSections.categories ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out`}
              style={{ maxHeight: openSections.categories ? '200px' : '0' }}
            >
              <div className="space-y-2 py-2">
                {categories.map((category) => (
                  <label
                    className="flex items-center cursor-pointer"
                    key={category.id}
                  >
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span className="ml-2">{category.name}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="relative border-t border-gray-200 pt-4">
            <button
              onClick={() => toggleSection('price')}
              className="w-full flex items-center cursor-pointer justify-between font-medium hover:text-blue-600 transition-colors"
            >
              <h3 className="text-lg">Khoảng giá</h3>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ease-in-out ${
                  openSections.price ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out`}
              style={{ maxHeight: openSections.price ? '240px' : '0' }}
            >
              <div className="space-y-2 py-2 flex flex-col gap-1">
                {priceRanges.map((priceRange) => (
                  <button
                    key={priceRange.id}
                    onClick={() => setSelectedPriceRange(priceRange.id)}
                    className={`border text-center cursor-pointer border-gray-200 rounded-md px-2 py-1 transition-colors ${
                      selectedPriceRange === priceRange.id
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'hover:border-blue-600'
                    }`}
                  >
                    {priceRange.name} ({priceRange.count})
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="relative border-t border-gray-200 pt-4">
            <button
              onClick={() => toggleSection('brand')}
              className="w-full flex items-center cursor-pointer justify-between font-medium hover:text-blue-600 transition-colors"
            >
              <h3 className="text-lg">Thương hiệu</h3>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ease-in-out ${
                  openSections.brand ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out`}
              style={{ maxHeight: openSections.brand ? '120px' : '0' }}
            >
              <div className="space-y-2 py-2">
                {brands.map((brand) => (
                  <label
                    className="flex items-center cursor-pointer"
                    key={brand.id}
                  >
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span className="ml-2">
                      {brand.name} ({brand.count})
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="relative border-t border-gray-200 pt-4">
            <button
              onClick={() => toggleSection('year')}
              className="w-full flex items-center cursor-pointer justify-between font-medium hover:text-blue-600 transition-colors"
            >
              <h3 className="text-lg">Năm sản xuất</h3>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ease-in-out ${
                  openSections.year ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out`}
              style={{ maxHeight: openSections.year ? '160px' : '0' }}
            >
              <div className="space-y-2 py-2">
                {years.map((year) => (
                  <label
                    className="flex items-center cursor-pointer"
                    key={year.id}
                  >
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span className="ml-2">
                      {year.year} ({year.count})
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="relative border-t border-gray-200 pt-4">
            <button
              onClick={() => toggleSection('origin')}
              className="w-full flex items-center cursor-pointer justify-between font-medium hover:text-blue-600 transition-colors"
            >
              <h3 className="text-lg">Xuất xứ</h3>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ease-in-out ${
                  openSections.origin ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out`}
              style={{ maxHeight: openSections.origin ? '120px' : '0' }}
            >
              <div className="space-y-2 py-2">
                {origins.map((origin) => (
                  <label
                    className="flex items-center cursor-pointer"
                    key={origin.id}
                  >
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span className="ml-2">
                      {origin.name} ({origin.count})
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
