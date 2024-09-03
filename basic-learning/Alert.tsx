import { ReactNode } from "react";

interface alertProps {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: alertProps) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button type="button" className="btn-close" onClick={onClose} />
    </div>
  );
};

export default Alert;
