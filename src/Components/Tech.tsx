import React, { ReactNode } from "react";
import Button from "./Button";
import VerticalDivider from "./VerticalDivider";
import DropdownContainer from "./DropdownContainer";
import "./ProjectCard.css";

interface TechProps {
  children: ReactNode
}

export default function Tech({

  children,
}: TechProps) {

  return (
    <div className="rounded bg-gray-300 text-black p-1">
        {children}
    </div>

  );
}
