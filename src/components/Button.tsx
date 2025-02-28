import clsx from "clsx";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx(
        "text-body-sm flex cursor-pointer items-center justify-center rounded-full bg-black px-6 py-3 text-white transition hover:bg-gray-600",
        className,
      )}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};
