'use client';

import { useState } from 'react';
import FilterSidebar from '@/components/FilterSidebar';
import SortOptions from '@/components/SortOptions';
import ProductGrid from '@/components/ProductGrid';
import { products, sortOptions } from '@/data/data';
import Banner from '@/components/Banner';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import ServiceHighlights from '@/components/ServiceHighlights';

export default function Home() {
  const [activeSort, setActiveSort] = useState('relevant');

  return (
    <div className="min-h-screen">
      <div className="mx-auto py-8">
        <div className="flex items-center gap-2 text-sm mb-8">
          <Link href="/" className="text-gray-500">
            Trang chủ
          </Link>
          <ChevronRight className="w-4 h-4" />
          <div className="text-blue-800 font-medium">Sản phẩm</div>
        </div>
        <Banner />
        <div className="flex gap-8">
          <FilterSidebar />
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold">Danh sách sản phẩm</h3>
              <SortOptions
                options={sortOptions}
                activeSort={activeSort}
                onSortChange={setActiveSort}
              />
            </div>
            <ProductGrid products={products} />
          </div>
        </div>
        <div className="mt-12">
          <ServiceHighlights />
        </div>
      </div>
    </div>
  );
}
