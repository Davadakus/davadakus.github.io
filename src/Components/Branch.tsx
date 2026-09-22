import React, { ReactNode, useState } from "react";
import Button from "./Button";
import VerticalDivider from "./VerticalDivider";
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
    <div className="flex flex-col">
        <div className="relative flex flex-row items-center gap-4 p-4 bg-neutral-800  text-2xl">
            <img src={imageSrc} draggable="false" className="object-contain size-20"/>
              <VerticalDivider/>
            <div>{role}</div>
            <div className="absolute bottom-3 right-3 text-right">
              <button className="flex items-center text-sm cursor-pointer" onClick={() => setDetails((prev) => !prev)}> <MdOutlineArrowDropDown size={25} /> </button>
            </div>
        </div>
    </div>

  );
}

