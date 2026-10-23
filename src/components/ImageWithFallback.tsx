import React, { useState } from 'react';
import { RemixIcon } from './RemixIcon';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackIcon?: string;
  containerClassName?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  fallbackTitle,
  fallbackIcon = 'ri-landscape-line',
  ...props
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Optimize Unsplash image URLs to auto-format to WebP/AVIF with compression
  const optimizedSrc = React.useMemo(() => {
    if (!src) return '';
    if (src.includes('images.unsplash.com')) {
      const url = new URL(src);
      url.searchParams.set('auto', 'format,compress');
      url.searchParams.set('fm', 'webp');
      url.searchParams.set('q', '80');
      return url.toString();
    }
    return src;
  }, [src]);

  return (
    <div className={`relative overflow-hidden bg-[#0A1222] ${containerClassName}`}>
      {!error && optimizedSrc ? (
        <picture>
          <source type="image/avif" srcSet={optimizedSrc.replace('fm=webp', 'fm=avif')} />
          <source type="image/webp" srcSet={optimizedSrc} />
          <img
            src={optimizedSrc}
            alt={alt || fallbackTitle || 'Destination landmark'}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setError(true)}
            onLoad={() => setLoaded(true)}
            className={`transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
            {...props}
          />
        </picture>
      ) : null}

      {/* Styled Fallback Container: Dark blue & Light blue accents */}
      {(error || !optimizedSrc || !loaded) && (
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center p-3 text-center bg-gradient-to-br from-[#0c1933] via-[#112447] to-[#081020] text-slate-300 transition-opacity duration-200 ${
            loaded && !error ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center mb-1.5 text-blue-300 shadow-inner">
            <RemixIcon name={fallbackIcon || 'ri-building-line'} className="text-lg" />
          </div>
          {fallbackTitle && (
            <p className="text-[11px] font-semibold text-white line-clamp-1 max-w-[90%] tracking-tight">
              {fallbackTitle}
            </p>
          )}
          <span className="text-[9px] text-blue-300/80 uppercase tracking-widest mt-0.5 font-medium">
            Verified Landmark
          </span>
        </div>
      )}
    </div>
  );
};
