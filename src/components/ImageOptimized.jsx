// components/ImageOptimized.js
import React, { useState, useEffect } from 'react';

const ImageOptimized = ({
  src,
  alt,
  className = '',
  width,
  height,
  lazy = true,
  priority = false,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    // Set low-quality placeholder first
    if (src) {
      // You can implement blurhash or low-quality image placeholder here
      setImageSrc(src);
    }
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
    console.error(`Failed to load image: ${src}`);
  };

  // Generate WebP URL if supported
  const getOptimizedSrc = (src) => {
    if (typeof window === 'undefined') return src;
    
    // Check if browser supports WebP
    const supportsWebP = () => {
      const elem = document.createElement('canvas');
      if (elem.getContext && elem.getContext('2d')) {
        return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
      }
      return false;
    };

    // Convert to WebP if supported and source is not already WebP
    if (supportsWebP() && !src.includes('.webp')) {
      // This is a placeholder - in production, use a CDN or image optimization service
      return src;
    }
    
    return src;
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      {!isLoaded && !error && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#112240] to-[#0a192f] animate-pulse"
          style={{ width, height }}
        />
      )}

      {/* Error state */}
      {error && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-red-800/20 flex items-center justify-center"
          style={{ width, height }}
        >
          <span className="text-gray-400 text-sm">Failed to load image</span>
        </div>
      )}

      {/* Actual Image */}
      <img
        src={getOptimizedSrc(imageSrc)}
        alt={alt || ''}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        width={width}
        height={height}
        loading={priority ? 'eager' : (lazy ? 'lazy' : 'eager')}
        fetchpriority={priority ? 'high' : 'auto'}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />

      {/* Accessibility: Hide from screen readers if decorative */}
      {!alt && <span className="sr-only">Decorative image</span>}
    </div>
  );
};

export default React.memo(ImageOptimized);