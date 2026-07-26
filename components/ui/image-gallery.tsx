'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const SRI_LANKA_GALLERY = [
  // Column 1
  [
    { src: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80", title: "Sigiriya Rock Fortress", ratio: 9 / 16 },
    { src: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80", title: "Tea Pluckers Nuwara Eliya", ratio: 16 / 9 },
    { src: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1200&q=80", title: "Victoria Golf Resort Kandy", ratio: 9 / 16 },
    { src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80", title: "Yala Wildlife Leopard Safari", ratio: 16 / 9 },
  ],
  // Column 2
  [
    { src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80", title: "Nine Arch Railway Viaduct", ratio: 16 / 9 },
    { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80", title: "Galle Dutch Fort Sunset", ratio: 9 / 16 },
    { src: "https://images.unsplash.com/photo-1581852017103-68ac65514cf7?auto=format&fit=crop&w=1200&q=80", title: "Wild Asian Elephants", ratio: 16 / 9 },
    { src: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80", title: "Bentota Riviera Palms", ratio: 9 / 16 },
  ],
  // Column 3
  [
    { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80", title: "Ceylon Tea Trails Bungalow", ratio: 9 / 16 },
    { src: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1200&q=80", title: "Royal Colombo Golf Club", ratio: 16 / 9 },
    { src: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=1200&q=80", title: "Kandy Sacred Lake", ratio: 9 / 16 },
    { src: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80", title: "Airbus Helicopter Tour", ratio: 16 / 9 },
  ]
];

export function ImageGallery() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center py-12 px-4 bg-[#081B33]">
      <div className="mx-auto grid w-full max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SRI_LANKA_GALLERY.map((colImages, colIndex) => (
          <div key={colIndex} className="grid gap-6">
            {colImages.map((item, index) => (
              <AnimatedImage
                key={`${colIndex}-${index}`}
                alt={item.title}
                src={item.src}
                ratio={item.ratio}
                placeholder="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=600&q=80"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

interface AnimatedImageProps {
  alt: string;
  src: string;
  className?: string;
  placeholder?: string;
  ratio: number;
}

function AnimatedImage({ alt, src, ratio, placeholder }: AnimatedImageProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isLoading, setIsLoading] = React.useState(true);
  const [imgSrc, setImgSrc] = React.useState(src);

  const handleError = () => {
    if (placeholder) {
      setImgSrc(placeholder);
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[#C9A227]/30 hover:border-[#C9A227] transition-all shadow-xl">
      <AspectRatio
        ref={ref}
        ratio={ratio}
        className="bg-[#0D2647] relative size-full rounded-2xl overflow-hidden"
      >
        <img
          alt={alt}
          src={imgSrc}
          className={cn(
            'size-full rounded-2xl object-cover opacity-0 transition-all duration-1000 ease-in-out group-hover:scale-105',
            {
              'opacity-100': isInView && !isLoading,
            },
          )}
          onLoad={() => setIsLoading(false)}
          loading="lazy"
          onError={handleError}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081B33]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
          <span className="font-serif text-sm font-bold text-white tracking-wide">{alt}</span>
        </div>
      </AspectRatio>
    </div>
  );
}
