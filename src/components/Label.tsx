interface LabelProps {
  label: string;
  children: React.ReactNode;
  htmlFor?: string;
}

export const Label: React.FC<LabelProps> = ({ label, children, htmlFor }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={htmlFor} className="text-dark text-body-sm">
        {label}
      </label>
      {children}
    </div>
  );
};
