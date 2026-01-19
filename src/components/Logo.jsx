import React from "react";

export const Logo = ({ className = "" }) => {
  return (
    <img
      src="https://res.cloudinary.com/dvkt0lsqb/image/upload/v1768760844/Almara_dcvfcv.jpg"
      alt="Almara Pay Logo"
      className={`h-16 w-auto object-contain rounded-lg ${className}`}
    />
  );
};
