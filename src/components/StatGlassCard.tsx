'use client';

type Props = {
  label: string;
  value: string;
};

export default function StatGlassCard({ label, value }: Props) {
  return (
    <div className='relative w-full group'>
      <div
        className='
          relative z-20
          w-full h-full
          rounded-2xl
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          shadow-[0_8px_32px_rgba(0,0,0,0.08)]
          p-2
          sm:p-3 md:p-5
          flex
          flex-col
          justify-center
          items-center
          text-center
          transition
          duration-300
          group-hover:scale-[1.02]
        '
        style={{
          isolation: 'isolate',
          WebkitBackdropFilter: 'blur(20px)',
          transform: 'translateZ(0)', // 🔥 safari + stronger separation
        }}
      >
        {/* VALUE */}
        <h3 className='text-md sm:text-2xl font-semibold text-black/70 break-words'>
          {value}
        </h3>

        {/* LABEL */}
        <p className='text-sm sm:text-base text-gray/600 mt-1 break-words'>
          {label}
        </p>
      </div>
    </div>
  );
}
