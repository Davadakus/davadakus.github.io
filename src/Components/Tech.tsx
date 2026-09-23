import React from "react";
import { Tech as TechType, TechDefinitions } from "../data/tech";

interface TechProps {
  tech: TechType;
}

export default function Tech({
  tech,
}: TechProps) {

  return (
    <div className="rounded bg-gray-300 text-black p-1">
        {TechDefinitions[tech].name}
    </div>

  );
}
