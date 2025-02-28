import clsx from "clsx";
import React from "react";

interface IconCircleBackgroundProps {
  children: React.ReactNode;
  variant?: "yellow" | "blue" | "teal" | "gray";
  size?: "sm" | "md" | "lg";
  isButton?: boolean;
}

const variantStyles = {
  yellow: "bg-yellow-100 text-yellow-500",
  blue: "bg-blue-100 text-blue-500",
  teal: "bg-teal-100 text-teal-500",
  gray: "bg-gray-100 text-gray-500",
};

const sizeStyles = {
  sm: "w-10 h-10",
  md: "w-12 h-12",
  lg: "w-14 h-14",
};

export const IconCircleBackground: React.FC<IconCircleBackgroundProps> = ({
  children,
  variant = "gray",
  size = "md",
  isButton = false,
}) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-center rounded-full",
        variantStyles[variant],
        sizeStyles[size],
        isButton && "hover:bg-opacity-75 cursor-pointer transition",
      )}
    >
      {children}
    </div>
  );
};
