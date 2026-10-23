import React from 'react';

export interface RemixIconProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
  className?: string;
  size?: string | number;
}

/**
 * Remix Icon component wrapper using RemixIcon font classes.
 * Can be used as <RemixIcon name="ri-phone-fill" className="text-emerald-500" />
 * or <RemixIcon name="phone-line" />
 */
export const RemixIcon: React.FC<RemixIconProps> = ({
  name,
  className = '',
  size,
  style,
  ...props
}) => {
  const iconClass = name.startsWith('ri-') ? name : `ri-${name}`;
  const inlineStyle: React.CSSProperties = {
    ...(size ? { fontSize: typeof size === 'number' ? `${size}px` : size } : {}),
    ...style,
  };

  return (
    <i
      className={`${iconClass} inline-flex items-center justify-center leading-none shrink-0 ${className}`}
      style={inlineStyle}
      aria-hidden="true"
      {...props}
    />
  );
};

export default RemixIcon;
