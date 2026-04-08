import React from 'react';

const VIDEO_URL = "/assets/Hero.mp4";

export const VideoBackground: React.FC = () => {
  return (
    <div className="absolute inset-x-0 bottom-0 top-[480px] z-0 overflow-hidden pointer-events-none bg-white lg:top-[520px]">
      <video
        src={VIDEO_URL}
        muted
        playsInline
        autoPlay
        loop
        className="h-full w-full object-cover transition-opacity duration-1000"
        style={{ opacity: 1 }}
      />
    </div>
  );
};
