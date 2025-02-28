import clsx from "clsx";
import React from "react";

interface ContactProps {
  name: string;
  role: string;
  avatar: string;
  selected?: boolean;
  onSelect: () => void;
}

export const Contact: React.FC<ContactProps> = ({
  name,
  role,
  avatar,
  selected = false,
  onSelect,
}) => {
  return (
    <div
      className="flex cursor-pointer flex-col items-center space-y-1"
      onClick={onSelect}
    >
      <img
        src={avatar}
        alt={name}
        className={clsx(
          "h-16 w-16 rounded-full border-2",
          selected ? "border-dark" : "border-transparent",
        )}
      />
      <span
        className={clsx(
          "text-body-sm text-dark whitespace-nowrap",
          selected ? "font-bold" : "",
        )}
      >
        {name}
      </span>
      <span
        className={clsx(
          "text-label-sm text-light-blue",
          selected ? "font-bold" : "",
        )}
      >
        {role}
      </span>
    </div>
  );
};
