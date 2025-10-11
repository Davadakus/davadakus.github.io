import React from "react";
import Image from 'next/image'

interface ButtonProps {
  link: string;
  path: string;
}

function Button({ link, path }: ButtonProps) {
  return (
    <div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="button-anim">
          {/* <img src={path} alt="button icon" /> */}
          <Image
            src={path}
            alt="button-icon"
            width={150}
            height={40}
            />
        </div>
      </a>
    </div>
  );
}

export default Button;