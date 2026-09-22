import React, { ReactNode } from "react";
import Button from "./Button";
import VerticalDivider from "./VerticalDivider";
import DropdownContainer from "./DropdownContainer";
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

  return (
    <DropdownContainer className="flex flex-col" buttonLabel="Branch">
      {() => (
        <div>
          <div className="flex flex-col p-4 bg-neutral-900">

            <div className="flex flex-row items-center gap-4 text-2xl">
              <img src={imageSrc} draggable="false" className="object-contain size-20"/>
              <VerticalDivider/>
              <div>{role}</div>
            </div>  

            <div className="flex flex-wrap gap-4 py-2">
              <div>Tweets</div>
              <div>Tweets</div>
            </div>
          
          </div>
          
        </div>
      )}
    </DropdownContainer>

  );
}
