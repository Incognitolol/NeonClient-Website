// Copyright 2023 PinkCloud Studios. All rights reserved.
// Project: Voyager
// Author: Elaina Lynn
// Date: 2023-02-12
// Description: A carousel component for displaying images

import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

interface CarouselItem {
  type: 'image' | 'video';
  src: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
  // Ensure video is first in carousel
  const sortedItems = [...items].sort((a, b) => {
    if (a.type === 'video') return -1;
    if (b.type === 'video') return 1;
    return 0;
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<NodeJS.Timeout>();

  // Reset carousel
  const resetCarousel = useCallback(() => {
    setCurrentIndex(0);
    setUserPaused(false);
  }, []);

  // Component cleanup
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const nextSlide = useCallback(() => {
    if (videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
    }
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sortedItems.length);
    setUserPaused(false); // Reset user pause state on slide change
  }, [sortedItems.length]);

  const prevSlide = useCallback(() => {
    if (videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
    }
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sortedItems.length) % sortedItems.length);
    setUserPaused(false); // Reset user pause state on slide change
  }, [sortedItems.length]);

  useEffect(() => {
    const isVideoSlide = sortedItems[currentIndex]?.type === 'video';
    setIsPlaying(isVideoSlide);
    
    if (!isVideoSlide) {
      timerRef.current = setTimeout(nextSlide, 5000);
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }
  }, [currentIndex, sortedItems, nextSlide]);

  useEffect(() => {
    const isVideoSlide = sortedItems[currentIndex]?.type === 'video';
    
    if (isVideoSlide && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
      
      const handlePlay = () => {
        setIsVideoPaused(false);
      };
      
      const handlePause = () => {
        setIsVideoPaused(true);
      };
      
      const handleEnded = () => nextSlide();
      
      videoRef.current.addEventListener('play', handlePlay);
      videoRef.current.addEventListener('pause', handlePause);
      videoRef.current.addEventListener('ended', handleEnded);
      
      if (!userPaused) {
        const attemptAutoplay = () => {
          videoRef.current?.play().catch(error => {
            console.error('Video autoplay failed:', error);
            setIsVideoPaused(true);
          });
        };
        
        setTimeout(attemptAutoplay, 300);
      }
      
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('play', handlePlay);
          videoRef.current.removeEventListener('pause', handlePause);
          videoRef.current.removeEventListener('ended', handleEnded);
        }
      };
    }
  }, [currentIndex, sortedItems, nextSlide, userPaused]);

  const toggleVideoPause = useCallback(() => {
    if (!videoRef.current) return;
    
    if (videoRef.current.paused) {
      videoRef.current.play()
        .then(() => {
          setIsVideoPaused(false);
          setUserPaused(false);
        })
        .catch(e => {
          console.error('Play failed:', e);
          setIsVideoPaused(true);
        });
    } else {
      videoRef.current.pause();
      setIsVideoPaused(true);
      setUserPaused(true);
    }
  }, []);

  const goToSlide = (index: number) => {
    if (videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
    }
    setCurrentIndex(index);
    setUserPaused(false); 
  };

  const renderItem = (item: CarouselItem, index: number) => {
    const isActive = index === currentIndex;
    
    if (item.type === 'video') {
      return (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <video
            ref={isActive ? videoRef : undefined}
            src={item.src}
            className="w-full h-full object-cover bg-black"
            playsInline
            muted={true}
            controls={false}
            loop={false}
            autoPlay={isActive}
          />
        </div>
      );
    }

    return (
      <div
        key={index}
        className={`absolute inset-0 transition-opacity duration-500 ${
          isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <img
          src={item.src}
          alt={`Showcase ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    );
  };

  return (
    <div className="relative">
      <div className="relative aspect-video w-full bg-[#0f1420] rounded-lg overflow-hidden group">
        {sortedItems.map((item, index) => renderItem(item, index))}
        
        {/* Fixed navigation arrows - always visible on hover with improved click area */}
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <button 
              onClick={prevSlide}
              className="h-full w-1/2 flex items-center pointer-events-auto cursor-pointer focus:outline-none"
              aria-label="Previous slide"
            >
              <div className="ml-6 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors">
                <ChevronLeft className="w-6 h-6" />
              </div>
            </button>
            
            <button 
              onClick={nextSlide}
              className="h-full w-1/2 flex items-center justify-end pointer-events-auto cursor-pointer focus:outline-none"
              aria-label="Next slide"
            >
              <div className="mr-6 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors">
                <ChevronRight className="w-6 h-6" />
              </div>
            </button>
          </div>
        </div>

        {sortedItems[currentIndex]?.type === 'video' && (
          <div className="absolute bottom-4 right-4 z-20">
            <button
              onClick={toggleVideoPause}
              className="p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors focus:outline-none"
              aria-label={isVideoPaused ? "Play video" : "Pause video"}
            >
              {isVideoPaused ? <Play className="w-6 h-6" /> : <Pause className="w-6 h-6" />}
            </button>
          </div>
        )}

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {sortedItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none ${
                index === currentIndex 
                  ? 'bg-[#22d3ee] w-4' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to item ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}; 