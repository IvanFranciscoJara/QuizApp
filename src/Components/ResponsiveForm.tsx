import React from "react";
import "./sass/ResponsiveForm.sass";
interface Props {
  Children?: any;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const ResponsiveForm: React.FC<Props> = ({ children, onSubmit }) => {
  return (
    <div className="ContainerResponsiveForm">
      <form onSubmit={onSubmit}>{children}</form>
    </div>
  );
};

export default ResponsiveForm;
