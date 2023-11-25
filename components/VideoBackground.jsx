import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const VideoBackground = () => {
  const videoRef = useRef();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div ref={ref} className="h-screen w-full relative overflow-hidden">
      <video
        ref={videoRef}
        className="absolute h-full w-full object-cover"
        autoPlay
        loop
        playsInline
        onPlay={playVideo}
        onPause={pauseVideo}
      >
        <source src="/Assets/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
