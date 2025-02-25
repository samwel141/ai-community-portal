import { FC, HTMLAttributes } from "react";

interface LogoImageProps extends HTMLAttributes<HTMLImageElement> {}

const LogoImage: FC<LogoImageProps> = ({ className, ...props }) => {
  return (
    <img
     src="/images/logo-transparent.png"
      alt="Logo"
      style={{ width: '150px', height: '80px' }}
      className={className}
      {...props}
    />
  );
};

export default LogoImage;

