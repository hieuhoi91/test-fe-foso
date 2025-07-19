import Image from 'next/image';

interface ServiceItemProps {
  image: string;
  title: string;
  description: string;
}

const ServiceItem = ({ image, title, description }: ServiceItemProps) => (
  <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-md">
    <Image src={image} alt={title} width={50} height={50} />
    <div>
      <h3 className="font-bold text-base text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

export default function ServiceHighlights() {
  const services = [
    {
      image: '/money.png',
      title: 'Miễn phí vận chuyển',
      description: 'Với hóa đơn từ 1 triệu',
    },
    {
      image: '/support.png',
      title: 'Hỗ trợ 24/7',
      description:
        'Đội ngũ CSKH tận tình sẵn sàng lắng nghe và phục vụ tận tâm',
    },
    {
      image: '/delivery.png',
      title: 'Giao hàng nhanh 2h',
      description: 'Trong vòng bán kính 10km nội thành TP HCM',
    },
    {
      image: '/package.png',
      title: '30 ngày đổi trả',
      description:
        'Hoàn tiền 100% nếu phát sinh lỗi từ NSX hoặc đơn vị vận chuyển',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <ServiceItem key={index} {...service} />
      ))}
    </div>
  );
}
