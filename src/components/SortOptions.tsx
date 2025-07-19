import { TiArrowRight } from 'react-icons/ti';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { BsCheckLg } from 'react-icons/bs';
import { ISortOption } from '@/data/data';

interface SortOptionsProps {
  options: ISortOption[];
  activeSort: string;
  onSortChange: (value: string) => void;
}

export default function SortOptions({
  options,
  activeSort,
  onSortChange,
}: SortOptionsProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <span>Sắp xếp theo</span>
        {options.map((option) => (
          <button
            key={option.id}
            className={`relative px-6 py-2 rounded-md border-1 cursor-pointer transition-colors overflow-hidden duration-200 text-black bg-white ${
              activeSort === option.value
                ? ' border-blue-600'
                : 'border-transparent hover:bg-gray-100'
            }`}
            onClick={() => onSortChange(option.value)}
          >
            {activeSort === option.value && (
              <div
                style={{
                  clipPath: 'polygon(100% 0, 0 0, 100% 80%)',
                }}
                className="absolute -top-1 -right-1 w-9 h-9 bg-[#0066FF] flex items-center justify-center"
              >
                <BsCheckLg className="text-white text-xs font-bold absolute right-[5px] top-[5px]" />
              </div>
            )}
            {option.name}
          </button>
        ))}
        <button className="px-6 py-2 rounded-md flex items-center cursor-pointer transition-colors overflow-hidden duration-200 text-black">
          Giá: Thấp
          <TiArrowRight />
          Cao
          <MdOutlineKeyboardArrowDown />
        </button>
      </div>
    </div>
  );
}
