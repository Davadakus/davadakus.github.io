import React from "react";

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