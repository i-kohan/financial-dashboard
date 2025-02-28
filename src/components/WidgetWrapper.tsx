import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface WidgetWrapperProps {
  title: string;
  children: ReactNode;
  seeAllLink?: string;
}

export const WidgetWrapper: React.FC<WidgetWrapperProps> = ({
  title,
  seeAllLink,
  children,
}) => {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-label-lg text-navy">{title}</h2>
        {seeAllLink && (
          <Link
            to={seeAllLink}
            className="text-body-md text-navy hover:underline"
          >
            See All
          </Link>
        )}
      </div>

      {children}
    </div>
  );
};
