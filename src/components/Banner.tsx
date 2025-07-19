import { products } from '@/data/data';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from './ProductCard';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner: React.FC = () => {
  return (
    <div className="mb-8 bg-blue-500 rounded-lg">
      <Image
        src="/banner.png"
        alt="Tải app nhận quà - Tích điểm ngay trên app SUNFIL1"
        width={1200}
        height={300}
        className="w-full rounded-lg"
        priority
      />
      <div className="mt-8 px-10">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          navigation
          autoplay={{ delay: 3000 }}
          className="product-swiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
