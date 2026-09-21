import React, { ReactNode, useState } from "react";
import Button from "./Button";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./ProjectCard.css";

interface BranchProps {
  imageSrc: string;
  role: string;
  trait: string;
  tech?: String[];
  reverse?: boolean
  children?: ReactNode
}




export default function Branch({
  imageSrc,
  role,
  trait,
  tech,
  reverse = false,
  children,
}: BranchProps) {
  
  const [details, setDetails] = useState<boolean>(false);
  
  return (
    <div className="flex flex-col px-2 py-4 bg-neutral-800 w-[200px]">
        <div className="flex flex-row">
            <img src={imageSrc} draggable="false" className="w-full h-full object-contain"/>
            <div>{role}</div>
        </div>
    </div>

  );
}

