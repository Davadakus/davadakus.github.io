import React, { ReactNode } from "react";
import DropdownButton from "./DropdownButton";
import useDetails from "./useDetails";

interface DropdownContainerProps {
  className?: string;
  buttonLabel?: string;
  children: (details: boolean, toggleDetails: () => void) => ReactNode;
}

export default function DropdownContainer({
  className = "",
  buttonLabel,
  children,
}: DropdownContainerProps) {
  const { details, toggleDetails } = useDetails();

  return (
    <div className={`relative ${className}`}>
      <div className={`flex bg-neutral-800 p-1 pl-4 transition-opacity duration-300 ease-out ${details ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <DropdownButton onClick={toggleDetails} label={buttonLabel} expanded />
      </div>
      {children(details, toggleDetails)}
      {!details && (
        <div className="absolute bottom-3 right-3 text-right text-white">
          <DropdownButton onClick={toggleDetails} showLabel={false} expanded={details} />
        </div>
      )}
    </div>
  );
}
