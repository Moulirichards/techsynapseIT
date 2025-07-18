import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Logo: React.FC<LogoProps> = (props) => {
  const { size = "xl", className = "" } = props;
  let imgClass = "";
  if (size === "sm") imgClass = "h-12";
  else if (size === "md") imgClass = "h-16";
  else if (size === "lg") imgClass = "h-20";
  else imgClass = "h-24 md:h-28";
  return (
    <img
      src="/logo.png"
      alt="Infocera Logo"
      className={imgClass + " w-auto object-contain " + className}
      draggable={false}
    />
  );
};
