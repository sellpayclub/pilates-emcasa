import React from 'react';
import { motion } from 'motion/react';

interface ImageCarouselProps {
  images: string[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  // We duplicate images to create a seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="w-full overflow-hidden relative py-2">
      <motion.div
        className="flex"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 66, // 3 seconds per image (22 images * 3s = 66s)
            ease: "linear",
          },
        }}
        style={{ width: "max-content" }}
      >
        {duplicatedImages.map((src, index) => (
          <div
            key={index}
            // Added pr-4 to replace gap-4 for seamless loop calculation
            className="relative h-[450px] md:h-[550px] w-auto shrink-0 pr-4"
          >
            <div className="h-full w-auto rounded-xl overflow-hidden shadow-md border border-gray-100 bg-gray-50">
              <img
                src={src}
                alt={`Resultado ${index}`}
                className="h-full w-auto object-contain"
                referrerPolicy="no-referrer"
                draggable={false}
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
