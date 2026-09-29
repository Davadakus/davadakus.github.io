import React from "react";
import { Tech as TechType, TechDefinitions } from "../data/tech";

interface TechProps {
  tech: TechType;
  className?: string;
}

export default function Tech({
  tech,
  className = "",
}: TechProps) {

  return (
    <div className={`rounded bg-gray-300 text-black p-1 text-lg select-none ${className}`}>
        {TechDefinitions[tech].name}
    </div>

  );
}
