import React from "react";
import "./Button.css";

interface ButtonProps {
  link: string;
  path: string;
}

function Button({ link, path }: ButtonProps) {
  return (
    <div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="button-anim">
          <img src={path} alt="button icon" />
        </div>
      </a>
    </div>
  );
}

export default Button;