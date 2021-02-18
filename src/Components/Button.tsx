import React from "react";
import "./sass/Button.sass";

interface Props {
  text?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  loading?: boolean;
}

const Button: React.FC<Props> = ({ text, onClick, loading }) => {
  return (
    <button className="ButtonContainer" onClick={onClick} type="button">
      {loading ? (
        <div className="loading">
          <div></div>
        </div>
      ) : (
        text
      )}
    </button>
  );
};
export default Button;
