'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';

type Props = {
  direction?: 'down' | 'up';
  onClick: () => void;
};

export default function ScrollArrow({ direction = 'down', onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className='absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 group'
    >
      {/* Text */}
      <span className='text-sm text-black/70 tracking-wide'>
        {direction === 'down' ? 'Scroll Down' : 'Scroll Up'}
      </span>

      {/* Arrow */}
      <div className='animate-bounce'>
        {direction === 'down' ? (
          <ChevronDown size={28} className='text-black/80' />
        ) : (
          <ChevronUp size={28} className='text-black/80' />
        )}
      </div>
    </button>
  );
}
