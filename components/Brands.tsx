import Image from 'next/image';
import clarifion from '@/public/logos/clarifion.png';
import McAffe from './svg/McAffe';
import Norton from './svg/Norton';

const Brands = () => {
  return (
    <div className="p-5 flex justify-between items-center xl:px-[128px] xl:py-[30px]">
      <figure className="w-[108px] h-5 xl:w-48 xl:h-9 relative block">
        <Image
          src={clarifion}
          alt="Clarifion Logo"
          width={192}
          height={36}
          sizes="(max-width: 768px) 108px, (max-width: 1200px) 192px, 192px"
          style={{
            zIndex: '-1',
            position: 'relative',
          }}
        />
      </figure>

      <div className="flex flex-row gap-4 xl:gap-8">
        <span className="w-11 h-4 xl:w-[88px] xl:h-[36px] relative -z-10">
          <McAffe />
        </span>
        <span className="w-11 h-4 xl:w-[88px] xl:h-[36px] relative -z-10">
          <Norton />
        </span>
      </div>
    </div>
  );
};

export default Brands;
