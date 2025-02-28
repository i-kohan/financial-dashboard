import clsx from "clsx";
import { ReactNode } from "react";

interface WidgetItemWrapperProps {
  children: ReactNode;
  className?: string;
}

export const WidgetItemWrapper: React.FC<WidgetItemWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        "h-full w-full rounded-2xl bg-white p-6 shadow-md",
        className,
      )}
    >
      {children}
    </div>
  );
};
