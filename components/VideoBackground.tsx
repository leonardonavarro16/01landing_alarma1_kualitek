"use client";

import { useRef, useEffect, useState } from "react";

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  fallback?: React.ReactNode;
}

export function VideoBackground({ src, poster, fallback }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768 ||
        /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
      );
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsLoaded(true);
      video.play().catch(() => setHasError(true));
    };

    const handleError = () => setHasError(true);

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
    };
  }, []);

  // Mobile: mostrar poster o fallback
  if (isMobile) {
    return (
      <div className="absolute inset-0">
        {poster ? (
          <img
            src={poster}
            alt="Security background"
            className="h-full w-full object-cover"
          />
        ) : (
          fallback
        )}
      </div>
    );
  }

  // Error: mostrar fallback
  if (hasError) {
    return <div className="absolute inset-0">{fallback}</div>;
  }

  return (
    <div className="absolute inset-0">
      <video
        ref={videoRef}
        className={`h-full w-full object-cover transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Loading state: mostrar fallback mientras carga */}
      {!isLoaded && <div className="absolute inset-0">{fallback}</div>}
    </div>
  );
}
