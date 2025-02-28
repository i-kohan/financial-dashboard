import clsx from "clsx";
import React from "react";

type InputVariant = "default" | "filled";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariant;
}

const variants: Record<InputVariant, string> = {
  default:
    "text-body-sm text-light-blue bg-white w-full rounded-xl px-6 py-4 outline-none border border-light-gray",
  filled:
    "text-body-sm text-light-blue bg-catskill-white w-full rounded-full px-6 py-4 outline-none",
};

export const Input: React.FC<InputProps> = ({
  className,
  variant = "default",
  ...props
}) => {
  return <input {...props} className={clsx(variants[variant], className)} />;
};
