import React, { useState } from 'react';

interface CountryFlagProps {
  countryName: string;
  flagCode: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const CountryFlag: React.FC<CountryFlagProps> = ({
  countryName,
  flagCode,
  size = 'md',
  className = '',
}) => {
  const code = (flagCode || 'un').toLowerCase();
  const [loadError, setLoadError] = useState(false);

  const sizeStyles = {
    sm: 'w-6 h-4 text-[9px]',
    md: 'w-8 h-5.5 text-[10px]',
    lg: 'w-10 h-7 text-xs',
    xl: 'w-14 h-9 text-sm',
  }[size];

  // Primary WebP and PNG representations from reliable high-availability FlagCDN
  const webpUrl = `https://flagcdn.com/w80/${code}.webp`;
  const pngUrl = `https://flagcdn.com/w80/${code}.png`;

  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden rounded shadow-sm border border-slate-700/60 bg-slate-900 shrink-0 ${sizeStyles} ${className}`}
      title={`${countryName} National Flag`}
    >
      {!loadError ? (
        <picture>
          <source type="image/webp" srcSet={`${webpUrl} 1x, https://flagcdn.com/w160/${code}.webp 2x`} />
          <img
            src={pngUrl}
            alt={`${countryName} flag`}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setLoadError(true)}
            className="w-full h-full object-cover"
          />
        </picture>
      ) : (
        <span className="font-mono font-bold uppercase tracking-wider text-slate-300">
          {code}
        </span>
      )}
    </div>
  );
};
