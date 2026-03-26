'use client';

import Image from 'next/image';

type Props = {
  name: string;
  icon: string;
};

export default function SkillGlassCard({ name, icon }: Props) {
  return (
    <div className='relative w-full aspect-square group'>
      <div
        className='
            relative z-10
            w-20 h-20 sm:w-20 sm:h-20 md:w-35 md:h-35 lg:w-40 lg:h-40
            rounded-2xl
            bg-red
            bg-white/5
            backdrop-blur-sm
            border border-white/20
            shadow-[0_8px_32px_rgba(0,0,0,0.08)]
            p-4
            flex flex-col
            justify-center
            items-center   /* ✅ FIXED */
            text-center
            transition duration-300
            group-hover:scale-[1.02]
          '
      >
        <Image
          src={icon}
          alt=''
          width={100}
          height={100}
          className='opacity-50 blur-sm absolute grayscale -z-10 w-10 h-10 sm:w-20 sm:h-20 top-1/2 left-1/4 transform translate-x-1/16 -translate-y-1/2'
        />
        <Image
          src={icon}
          alt=''
          width={100}
          height={100}
          className='w-10 h-10 sm:w-20 sm:h-20'
        />

        <h3 className='text-lg mt-3 text-center font-semibold hidden sm:inline text-black/70'>
          {name}
        </h3>
      </div>
    </div>
  );
}
