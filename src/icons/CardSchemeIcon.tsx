import { SVGProps } from "react";

export const CardSchemeIcon: React.FC<SVGProps<SVGSVGElement>> = ({
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 44 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="15" cy="15" r="15" fill="currentColor" fillOpacity="0.5" />
      <circle cx="29" cy="15" r="15" fill="currentColor" fillOpacity="0.5" />
    </svg>
  );
};
