import React from "react";

interface VerticalDividerProps {
  className?: string;
}

function VerticalDivider({ className = "" }: VerticalDividerProps) {
  return <div className={`w-px self-stretch bg-neutral-600 ${className}`} />;
}

export default VerticalDivider;
