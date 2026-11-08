import React from "react";

interface HorizontalDividerProps {
  className?: string;
}

function HorizontalDivider({ className = "" }: HorizontalDividerProps) {
  return <div className={`h-px self-stretch bg-neutral-600 ${className}`} />;
}

export default HorizontalDivider;
