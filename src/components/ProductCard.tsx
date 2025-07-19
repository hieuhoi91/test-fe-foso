'use client';

import Image from 'next/image';
import { formatNumber } from '@/utils/format';
import { IProduct } from '@/data/data';
import { useCartStore } from '@/store/cartStore';
import { toast } from 'sonner';

interface ProductCardProps {
  product: IProduct;
  showButton?: boolean;
  showBadge?: boolean;
}

export default function ProductCard({
  product,
  showButton = true,
  showBadge = true,
}: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success('Đã thêm vào giỏ hàng', {
      description: product.name,
      duration: 2000,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300">
      <div className="relative pt-[100%]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        {showBadge && (
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-orange-800 bg-orange-100 rounded-full mb-2">
            <Image src="/fire.png" alt="Giá cực sốc" width={16} height={16} />
            <span className="text-sm">Giá cực sốc</span>
          </div>
        )}
        <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2 min-h-[48px]">
          {product.name}
        </h3>
        <span className="text-lg font-bold text-red-600">
          {formatNumber(product.price)} đ
        </span>
        <div className="flex items-baseline mt-1">
          <span className="text-sm text-gray-400 line-through">
            {formatNumber(
              product.price + product.price * (product.discount / 100)
            )}
            đ
          </span>
          <span className="ml-2 text-xs font-semibold text-red-600">
            -{product.discount}%
          </span>
        </div>

        {showButton && (
          <button
            onClick={handleAddToCart}
            className="w-full cursor-pointer mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            Mua ngay
          </button>
        )}
      </div>
    </div>
  );
}
