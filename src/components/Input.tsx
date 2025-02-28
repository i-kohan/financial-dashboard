import clsx from "clsx";
import React from "react";

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  ...props
}) => {
  return (
    <input
      {...props}
      className={clsx(
        "text-body-sm text-light-blue bg-catskill-white w-full rounded-full px-6 py-4 outline-none",
        className,
      )}
    />
  );
};
